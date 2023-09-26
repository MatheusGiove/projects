/// <reference types="vite/client" />

interface PrincipalInterface {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  }
  genres: {
    id: number;
    name: string;
  }[];
  status: string;
  tagline: string;
  name: string;
  overview: string;
  original_language: string;
  homepage: string;
  original_title: string;
  release_date: string;
  seassons: {
    name: string;
    overview: string;
    seasson_number: number;
  }
  first_air_date: string;
  number_of_seasons: number;
  vote_average: number
}

interface ResultsGetFilmsInterface {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genres_ids: Array<number>;
  id: number;
  media_type: string;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface GetFilmsInterface {
  page: number;
  results: ResultsGetFilmsInterface[];
  total_pages: number;
  total_results: number;
}

interface DatabaseInterface {
  items: GetFilmsInterface | null;
  tema: string;
  title: string;
}
