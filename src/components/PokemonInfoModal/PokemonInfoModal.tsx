import { Accessor, Component, Setter, Show, createResource } from "solid-js";
import { Portal } from "solid-js/web";
import { fetchPokemonInfo } from "@/common";
import styles from "./PokemonInfoModal.module.css";

type PokemonInfoModalProps = {
  pokemonId: Accessor<number>;
  setPokemonId: Setter<number>;
};

export const PokemonInfoModal: Component<PokemonInfoModalProps> = (props) => {
  const [pokemonInfo] = createResource(props.pokemonId, fetchPokemonInfo);

  return (
    <Show when={props.pokemonId()}>
      <Portal>
        <div class={styles.overlay} />

        <div class={styles.modal}>
          {pokemonInfo.loading ? (
            <div class={styles.loading}>Loading...</div>
          ) : (
            <>
              <div class={styles.title}>{pokemonInfo()?.name}</div>
              <span class={styles.close} onClick={() => props.setPokemonId(0)} />

              <div class={styles.imageContainer}>
                <span>loading..</span>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemonId()}.png`}
                  alt="Pokemon image"
                />
              </div>
            </>
          )}
        </div>
      </Portal>
    </Show>
  );
};
