import React, { createContext, useContext, useState } from "react";

import { CharacterDataTypes, CharacterTypes } from "data/@types/Character";
import { CharacterContextTypes } from "data/@types/CharacterContext";
import { ChildrenProps } from "data/@types/Children";
import { api } from "data/services/apiService";
import { useRouter } from "next/dist/client/router";

const CharacterContext = createContext({} as CharacterContextTypes);

export const CharacterProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [characters, setCharacter] = useState<CharacterTypes[]>([]);
  const route = useRouter();
  const getData = async () => {
    try {
      let offset = page * itemsPerPage;
      const { data } = await api.get<CharacterDataTypes>(
        `/characters?offset=${offset}&limit=${itemsPerPage}`
      );
      setCount(data.data.total);
      setCharacter(data.data.results);
    } catch (err) {
      console.log(err);
      route.push("/404");
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        getData,
        characters,
        count,
        page,
        setPage,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  return context;
};
