export interface ApiResponse<T> {
  results: T;
}

export interface DataReponse {
  episodes: ApiResponse<EpisodesResult[]>;
  characters: ApiResponse<CharactersResult[]>;
}

export interface CharactersResult {
  id: string;
  name: string;
  status: Status;
  species: Species;
  gender: Gender;
  image: string;
  isFavorite?: boolean;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export interface EpisodesResult {
  name: string;
  episode: string;
}
