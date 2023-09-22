import {useContext} from 'react'
import { Database } from '../Context/DatabaseContext'


export function useData() {
  const context = useContext(Database);
  if (!context) {
    throw new Error("Esse componente precisa estar dentro de um DatabaseProvider");
  }
  return context;
}

export default useData