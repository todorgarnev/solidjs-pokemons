import { For, createEffect, createSignal } from "solid-js";
import styles from "./App.module.css";
import { Button } from "@/components";

export const App = () => {
  const [page, setPage] = createSignal<number>(0);
  const [pokemons, setPokemons] = createSignal<Record<string, string>[]>([]);

  createEffect(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page()}`);
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
              <span class={styles.pokemonIndex}>{i() + page() * 10 + 1}.</span>
              <span class={styles.pokemonName}>{pokemon.name}</span>
              <Button>More info</Button>
            </div>
          )}
        </For>

        <div class={styles.buttonsContainer}>
          <Button clickHandler={() => setPage(page() - 1)} page={page}>
            Previous 10
          </Button>

          <Button clickHandler={() => setPage(page() + 1)}>Next 10</Button>
        </div>
      </main>
    </>
  );
};
