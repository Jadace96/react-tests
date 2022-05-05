export type PokeNameType = string;

export type PokeTypes = {
  url: string;
  name: PokeNameType;
};

export type FetchPokesSuccessResponseTypes = {
  count: number;
  next: string;
  results: Array<PokeTypes>;
};

export type FetchPokesErrorTypes = any;

export type FetchPokesResponseTypes =
  | FetchPokesSuccessResponseTypes
  | FetchPokesErrorTypes;
