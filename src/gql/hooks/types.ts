import { GqlResponseType } from "gql/types";

export type GetAllCharactersResponseType<ResultType> = {
  characters: GqlResponseType<ResultType>;
};