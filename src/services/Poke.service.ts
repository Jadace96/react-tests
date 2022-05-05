// constants
import { BASE_URL } from "constant/Hosts.constant";

// types
import { FetchPokesResponseTypes } from "types/Poke.types";

export const fetchPokes = async (
  limit = 20
): Promise<FetchPokesResponseTypes> => {
  const URL = `${BASE_URL}/pokemon?limit=${limit}`;

  return await fetch(URL)
    .then((response) => response.json())
    .then((response) => ({ response }))
    .catch((error) => {
      console.error(error);
      return { isError: true };
    });
};
