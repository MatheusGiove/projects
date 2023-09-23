import React, { useState } from "react";
import useDatabase from "../Services/Tmdb";

interface ContextInterface {
  movies: DatabaseInterface[];
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const Database = React.createContext<ContextInterface | null>(null);

export const DatabaseProvider = ({ children }: React.PropsWithChildren) => {
  const [language, setLanguage] = useState<string>("pt-BR");
  const movies = useDatabase(language).filter(
    (movie) => movie.items.data !== null
  );

  return (
    <Database.Provider value={{ movies, language, setLanguage }}>
      {children}
    </Database.Provider>
  );
};
