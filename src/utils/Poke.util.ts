// types
import { PokeTypes } from "../types/Poke.types";

export const getPokesByName = (pokes: Array<PokeTypes> = []) =>
  pokes.map((poke: PokeTypes) => poke?.name);
