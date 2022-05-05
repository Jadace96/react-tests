// hooks
import { usePoke, UsePokeTypes } from "hooks/UsePoke.hook";

// constants
import { DATA_TEST_ID } from "constant";

// styles
import "./App.css";

// types
import { PokeNameType } from "types/Poke.types";

export function App() {
  const {
    pokesData,
    isFetchingPokes,
    fetchPokesByLimit,
    isFetchingPokesError,
  }: UsePokeTypes = usePoke();

  const onClickGetMorePokes = () => {
    const pokemonLimit = pokesData?.length + 20;

    fetchPokesByLimit(pokemonLimit);
  };

  if (isFetchingPokes) {
    return <div>Loading...</div>;
  } else if (isFetchingPokesError) {
    return <div>Error fetching pokes...</div>;
  }

  return (
    <>
      <div className="container">
        <h3>First {pokesData?.length || 0} pokemon</h3>
        <button onClick={onClickGetMorePokes}>Get 20 more</button>
      </div>
      <ul>
        {pokesData?.map((poke: PokeNameType, index: number) => (
          <li data-testid={DATA_TEST_ID.POKES.LIST_ITEM_NAME} key={poke}>
            {index + 1} - {poke}
          </li>
        ))}
      </ul>
    </>
  );
}
