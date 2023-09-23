import useFetch from "../Hooks/useFetch";
const Base_URL = "https://api.themoviedb.org/3/";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTllOTBjZDg3MWE2OWQ0ODRjOTg2Y2VlMTJiYzhmMiIsInN1YiI6IjY0ZWNjNDZiYzNjODkxMDExZGEwMTA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W3zTCbJskeS-FYuDo5RrYGi_n8KxZFmyueFsDuYr2D4",
  },
};

export default function useDatabase(language: string) {
  const database = [
    //Orignals
    {
      tema: "originals",
      title: "Originais do Farflix",
      items: useFetch<GetFilmsInterface>(
        `${Base_URL}discover/tv?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_networks=213`,
        options
      ),
      url: `${Base_URL}discover/tv?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_networks=213`,
    },
    // Trending
    {
      tema: "trending",
      title: "Recomendados para você",
      items: useFetch<GetFilmsInterface>(
        `${Base_URL}trending/all/week?language=${language}`,
        options
      ),
      url: `${Base_URL}trending/all/week?language=${language}`,
    },
    // Toprated
    {
      tema: "toprated",
      title: "Em alta",
      items: useFetch<GetFilmsInterface>(
        `${Base_URL}movie/top_rated?language=${language}`,
        options
      ),
      url: `${Base_URL}movie/top_rated?language=${language}`,
    },
    // Action
    {
      tema: "action",
      title: "Ação",
      items: useFetch<GetFilmsInterface>(
        `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=28`,
        options
      ),
      url: `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=28`,
    },
    // Comedy
    {
      tema: "comedy",
      title: "Comédia",
      items: useFetch<GetFilmsInterface>(
        `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=35`,
        options
      ),
      url: `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=35`,
    },
    // Horror
    {
      tema: "horror",
      title: "Terror",
      items: useFetch<GetFilmsInterface>(
        `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=27`,
        options
      ),
      url: `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=27`,
    },
    // Romance
    {
      tema: "romance",
      title: "Romance",
      items: useFetch<GetFilmsInterface>(
        `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=10749`,
        options
      ),
      url: `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=10749`,
    },
    // Documentary
    {
      tema: "documentary",
      title: "Documentário",
      items: useFetch<GetFilmsInterface>(
        `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=99`,
        options
      ),
      url: `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=99`,
    },
  ];
  return database;
}
