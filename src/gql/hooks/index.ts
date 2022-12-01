import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { getAllCharacters, getCharacterDetail } from "gql/queries";
import { Character } from "utils";
import { ALL_CHARACTERS_DATA, CHARACTER_DATA } from "./constants";
import {
  GetAllCharactersResponseType,
  GetCharacterDetailResponseType,
} from "./types";

/**
 * @description to fetch all characters data
 * @function useGetAllCharacters
 * @returns
 */
const useGetAllCharacters = (name: string) => {
  return useInfiniteQuery<GetAllCharactersResponseType<Character>>(
    [ALL_CHARACTERS_DATA],
    async ({ pageParam = 1 }) => await getAllCharacters(pageParam, { name }),
    {
      getPreviousPageParam: (firstPage) =>
        firstPage.characters.info.prev ?? undefined,
      getNextPageParam: (lastPage) =>
        lastPage.characters.info.next ?? undefined,
    }
  );
};

/**
 * @description to fetch specific character detail.
 * @param { number } id
 * @function useGetCharacterDetail
 * @returns
 */
const useGetCharacterDetail = (id: number | null) => {
  return useQuery<GetCharacterDetailResponseType>(
    [CHARACTER_DATA, id],
    async () => (id ? await getCharacterDetail(id) : {})
  );
};

export { useGetAllCharacters, useGetCharacterDetail };
