import { useInfiniteQuery } from "@tanstack/react-query";

import { getAllCharacters } from "gql/queries";
import { Character } from "utils";
import { ALL_CHARACTERS_DATA } from "./constants";
import { GetAllCharactersResponseType } from "./types";

/**
 * @description to fetch all characters data
 * @function useGetAllCharacters
 * @returns
 */
const useGetAllCharacters = () => {
  return useInfiniteQuery<GetAllCharactersResponseType<Character>>(
    [ALL_CHARACTERS_DATA],
    async ({ pageParam = 1 }) => await getAllCharacters(pageParam),
    {
      getPreviousPageParam: (firstPage) =>
        firstPage.characters.info.prev ?? undefined,
      getNextPageParam: (lastPage) =>
        lastPage.characters.info.next ?? undefined,
    }
  );
};

export { useGetAllCharacters };
