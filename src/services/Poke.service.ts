// constants
import { BASE_URL } from "../constants/Hosts.constant";

// types
import { FetchPokesResponseTypes } from "../types/Poke.types";

export const fetchPokes = async (
  limit = 20
): Promise<FetchPokesResponseTypes> => {
  const URL = `${BASE_URL}/pokemon?limit=${limit}`;
  const result = await fetch(URL);

  return result?.json();
};
