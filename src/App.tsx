import { For, createEffect, createSignal, onMount } from "solid-js";
import styles from "./App.module.css";
import { Button } from "@/components";

export const App = () => {
  const [pokemons, setPokemons] = createSignal<Record<string, string>[]>([]);

  onMount(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
    setPokemons(await res.json().then((data) => data.results));
  });

  createEffect(() => console.log(pokemons()));

  return (
    <>
      <header class={styles.header}>
        <h1>Pokedex</h1>
      </header>

      <main>
        <For each={pokemons()}>
          {(pokemon, i) => (
            <div class={styles.pokemon}>
              <span class={styles.pokemonIndex}>{i() + 1}.</span>
              <span class={styles.pokemonName}>{pokemon.name}</span>
              <Button>More info</Button>
            </div>
          )}
        </For>

        <div class={styles.buttonsContainer}>
          <Button>Get next 10</Button>
        </div>
      </main>
    </>
  );
};
