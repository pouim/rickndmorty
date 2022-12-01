import { GqlResponseType } from "gql/types";
import { Character } from "utils";

export type GetAllCharactersResponseType<ResultType> = {
  characters: GqlResponseType<ResultType>;
};

export type GetCharacterDetailResponseType = {
  character: Character;
};