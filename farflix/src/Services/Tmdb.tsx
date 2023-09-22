const Base_URL = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTllOTBjZDg3MWE2OWQ0ODRjOTg2Y2VlMTJiYzhmMiIsInN1YiI6IjY0ZWNjNDZiYzNjODkxMDExZGEwMTA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W3zTCbJskeS-FYuDo5RrYGi_n8KxZFmyueFsDuYr2D4`,
  },
};

async function getFilms<T>(endpoint: string) {
  try {
    const response = await fetch(`${Base_URL}${endpoint}`, options);
    if (!response.ok) throw new Error(`Erro: ${response.status}`);
    const json = (await response.json()) as T;
    return json;
  } catch (e) {
    if (e instanceof Error) throw new Error(`Erro: ${e.message}`);
  }
}

export default async function getDatabase(language: string) {
  const database = [
    //Orignals
    {
      tema: "Originais",
      title: "Originais do Farflix",
      items: await getFilms<GetFilms>(`discover/tv?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_networks=213`),
      url: `${Base_URL}discover/tv?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_networks=213`
    },
    // Trending
    {
      tema: "Trending",
      title: "Recomendados para você",
      items: await getFilms<GetFilms>(`trending/all/week?language=${language}`),
      url: `${Base_URL}trending/all/week?language=${language}`
    },
    // Toprated
    {
      tema: "Toprated",
      title: "Em alta",
      items: await getFilms<GetFilms>(`movie/top_rated?language=${language}`),
      url: `${Base_URL}movie/top_rated?language=${language}`
    },
    // Action
    {
      tema: "action",
      title: "Ação",
      items: await getFilms<GetFilms>(`discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=28`),
      url: `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=28`
    },
    // Comedy
    {
      tema: "comedy",
      title: "Comédia",
      items: await getFilms<GetFilms>(`discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=35`),
      url: `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=35`
    },
    // Horror
    {
      tema: "horror",
      title: "Terror",
      items: await getFilms<GetFilms>(`discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=27`),
      url: `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=27`
    },
    // Romance
    {
      tema: "romance",
      title: "Romance",
      items: await getFilms<GetFilms>(`discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=10749`),
      url: `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=10749`
    },
    // Documentary
    {
      tema: "documentary",
      title: "Documentário",
      items: await getFilms<GetFilms>(`discover/movie?include_adult=false&language=${language}&page=1&sort_by=popularity.desc&with_genres=99`),
      url: `${Base_URL}discover/movie?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=99`
    }
  ];
  return database;
}
