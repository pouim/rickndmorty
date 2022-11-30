import { useQuery } from "@tanstack/react-query";

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
  return useQuery<GetAllCharactersResponseType<Character>>(
    [ALL_CHARACTERS_DATA],
    getAllCharacters
  );
};

export { useGetAllCharacters };
