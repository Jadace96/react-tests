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
  fetchPokesByLimit: (limit: number) => void;
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

  const fetchPokesByLimit = (limit = 20) => {
    setIsFetchingPokes(true);
    setIsFetchingPokesError(false);
    setIsFetchingPokesSuccess(false);

    fetchPokes(limit)
      .then(onFetchPokesDataSuccess)
      .catch(onFetchPokesDataError)
      .finally(() => setIsFetchingPokes(false));
  };

  useEffect(() => {
    console.log("MOUNTED!!!");
    fetchPokesByLimit();
  }, []);

  return {
    pokesData,
    isFetchingPokes,
    fetchPokesByLimit,
    isFetchingPokesError,
    isFetchingPokesSuccess,
  };
};
