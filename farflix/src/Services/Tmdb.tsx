const Base_URL = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTllOTBjZDg3MWE2OWQ0ODRjOTg2Y2VlMTJiYzhmMiIsInN1YiI6IjY0ZWNjNDZiYzNjODkxMDExZGEwMTA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W3zTCbJskeS-FYuDo5RrYGi_n8KxZFmyueFsDuYr2D4",
  },
};

async function fetchMovies<T>(endpoint: string) {
  let response;
  let json: T | null = null;
  try {
    response = await fetch(`${Base_URL}${endpoint}`, options);
    if (!response.ok) throw new Error(`Erro: ${response.status}`);
    json = (await response.json()) as T;
    return json;
  } catch (erro) {
    json = null;
    return json;
  }
}

export default {
  useDatabase: async (language: string) => {
    return [
      //Orignals
      {
        tema: "originals",
        title: "Originais do Farflix",
        items: await fetchMovies<GetFilmsInterface>(
          `discover/tv?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_networks=213`
        ),
      },
      // Trending
      {
        tema: "trending",
        title: "Recomendados para você",
        items: await fetchMovies<GetFilmsInterface>(
          `trending/all/week?language=${language}`
        ),
      },
      // Toprated
      {
        tema: "toprated",
        title: "Em alta",
        items: await fetchMovies<GetFilmsInterface>(
          `movie/top_rated?language=${language}`
        ),
      },
      // Action
      {
        tema: "action",
        title: "Ação",
        items: await fetchMovies<GetFilmsInterface>(
          `discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=28`
        ),
      },
      // Comedy
      {
        tema: "comedy",
        title: "Comédia",
        items: await fetchMovies<GetFilmsInterface>(
          `discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=35`
        ),
      },
      // Horror
      {
        tema: "horror",
        title: "Terror",
        items: await fetchMovies<GetFilmsInterface>(
          `discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=27`
        ),
      },
      // Romance
      {
        tema: "romance",
        title: "Romance",
        items: await fetchMovies<GetFilmsInterface>(
          `discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=10749`
        ),
      },
      // Documentary
      {
        tema: "documentary",
        title: "Documentário",
        items: await fetchMovies<GetFilmsInterface>(
          `discover/movie?include_adult=false&language=${language}&page=1&sort_by=popularity.desc&with_genres=99`
        ),
      },
    ];
  },

  useMovieInfo: (id: number | undefined, type: string, language: string) => {
    let info = {};
    let url = "";
    if (id) {
      switch (type) {
        case "movie":
          url = `${Base_URL}/movie/${id}?language=${language}`;
          break;
        case "tv":
          url = `${Base_URL}/movie/${id}?language=${language}`;
          break;
        default:
          url = "";
          break;
      }
    }
    info = fetchMovies(url);
    return info;
  },
};
