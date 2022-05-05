import { useState, useEffect } from "react";

// services
import { fetchPokes } from "../services/Poke.service";

// utils
import { getPokesByName } from "../utils/Poke.util";

// types
import {
  PokeNameType,
  FetchPokesErrorTypes,
  FetchPokesSuccessResponseTypes,
} from "../types/Poke.types";

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

  const onFetchPokesDataSuccess = ({
    results,
  }: FetchPokesSuccessResponseTypes) => {
    const pokesName: Array<PokeNameType> = getPokesByName(results);

    setPokesData(pokesName);
    setIsFetchingPokesSuccess(true);
  };

  const onFetchPokesDataError = (error: FetchPokesErrorTypes) => {
    console.error(error);
    setIsFetchingPokesError(true);
  };

  const fetchPokesByLimit = async (limit = 20) => {
    setIsFetchingPokes(true);
    setIsFetchingPokesError(false);
    setIsFetchingPokesSuccess(false);

    fetchPokes(limit)
      .then(onFetchPokesDataSuccess)
      .catch(onFetchPokesDataError)
      .finally(() => setIsFetchingPokes(false));
  };

  useEffect(() => {
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
