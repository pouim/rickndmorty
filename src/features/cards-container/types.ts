import { GetAllCharactersResponseType } from "gql/hooks/types";
import { Character } from "utils";

export interface CardsContainerProps {
  isInitialLoading: boolean;
  pages: GetAllCharactersResponseType<Character>[];
}
