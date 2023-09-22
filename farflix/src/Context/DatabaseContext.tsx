import React, { useEffect, useState } from "react";
import getDatabase from "../Services/Tmdb";

interface DatabaseInterface {
  data: Database[] | null;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const Database = React.createContext<DatabaseInterface | null>(null);

export const DatabaseProvider = ({ children }: React.PropsWithChildren) => {
  const [data, setData] = useState<Database[] | null>(null);
  const [language, setLanguage] = useState<string>("pt-BR");

  useEffect(() => {
    const data = async () => {
      const films = await getDatabase(language);
      setData(films);
    };
    data();
  }, [language]);
  
  return (
    <Database.Provider value={{data, setLanguage}}>{children}</Database.Provider>
  );
};
