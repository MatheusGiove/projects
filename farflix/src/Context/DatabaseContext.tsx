import React, { useState, useEffect } from "react";
import Tmdb from "../Services/Tmdb";

interface ContextInterface {
  movies: DatabaseInterface[] | null;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const Database = React.createContext<ContextInterface | null>(null);

export const DatabaseProvider = ({ children }: React.PropsWithChildren) => {
  const [language, setLanguage] = useState<string>("pt-BR");
  const [movies, setMovies] = useState<DatabaseInterface[] | null>(null);

  useEffect(() => {
    const LoadMovies = async () => {
      const movies = (await Tmdb.useDatabase(language)).filter(
        (item) => item.items !== null
      );
      setMovies(movies);
    };
    LoadMovies();
  }, [language]);

  return (
    <Database.Provider value={{ movies, language, setLanguage }}>
      {children}
    </Database.Provider>
  );
};
