import { Accessor, Component, Setter, Show, createResource } from "solid-js";
import { Portal } from "solid-js/web";
import styles from "./PokemonInfoModal.module.css";
import { fetchPokemonInfo } from "@/common";

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
          <span class={styles.close} onClick={() => props.setPokemonId(0)} />

          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemonId()}.png`}
            alt="Pokemon image"
          />
        </div>
      </Portal>
    </Show>
  );
};
