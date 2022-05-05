// constants
import { BASE_URL } from "../constants/Hosts.constant";

// types
import { FetchPokesResponseTypes } from "../types/Poke.types";

export const fetchPokes = async (): Promise<FetchPokesResponseTypes> => {
  const result = await fetch(`${BASE_URL}/pokemon`);

  return result?.json();
};
