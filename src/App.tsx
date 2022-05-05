// hooks
import { usePoke, UsePokeTypes } from "./hooks/UsePoke.hook";

// constants
import { DATA_TEST_ID } from "./constants";

// styles
import "./App.css";

// types
import { PokeNameType } from "./types/Poke.types";

export function App() {
  const { pokesData, isFetchingPokes, isFetchingPokesError }: UsePokeTypes =
    usePoke();

  if (isFetchingPokes) {
    return <div>Loading...</div>;
  } else if (isFetchingPokesError) {
    return <div>Error fetching pokes...</div>;
  }

  return (
    <>
      <h3>First {pokesData?.length || 0} pokemon</h3>
      <ul>
        {pokesData?.map((poke: PokeNameType) => (
          <li data-testid={DATA_TEST_ID.POKES.LIST_ITEM_NAME} key={poke}>
            {poke}
          </li>
        ))}
      </ul>
    </>
  );
}
