import { useState, useEffect } from "react";

// services
import { fetchPokes } from "../services/Poke.service";

// utils
import { getPokesByName } from "../utils/Poke.util";

// types
import { PokeNameType, FetchPokesResponseTypes } from "../types/Poke.types";

export type UsePokeTypes = {
  isFetchingPokes: boolean;
  isFetchingPokesError: boolean;
  pokesData: Array<PokeNameType>;
  isFetchingPokesSuccess: boolean;
};

export const usePoke = (): UsePokeTypes => {
  const [isFetchingPokes, setIsFetchingPokes] = useState(false);
  const [pokesData, setPokesData] = useState<Array<PokeNameType>>([]);
  const [isFetchingPokesError, setIsFetchingPokesError] = useState(false);
  const [isFetchingPokesSuccess, setIsFetchingPokesSuccess] = useState(false);

  const onFetchPokesDataSuccess = (data: FetchPokesResponseTypes) => {
    const pokesName: Array<PokeNameType> = getPokesByName(data?.results);

    setPokesData(pokesName);
    setIsFetchingPokesSuccess(true);
  };

  const onFetchPokesDataError = (error: any) => {
    console.error(error);
    setIsFetchingPokesError(true);
  };

  useEffect(() => {
    setIsFetchingPokes(true);
    fetchPokes()
      .then(onFetchPokesDataSuccess)
      .catch(onFetchPokesDataError)
      .finally(() => setIsFetchingPokes(false));
  }, []);

  return {
    pokesData,
    isFetchingPokes,
    isFetchingPokesError,
    isFetchingPokesSuccess,
  };
};
