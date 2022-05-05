export type PokeNameType = string;

export type PokeTypes = {
  url: string;
  name: PokeNameType;
};

export type FetchPokesResponseTypes = {
  count: number;
  next: string;
  results: Array<PokeTypes>;
};
