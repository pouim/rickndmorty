import { CharacterGender, CharacterStatus } from "utils";

export interface CharacterCardProps {
  name: string;
  image: string;
  status: CharacterStatus;
  species: string;
  subSpecies: string;
  gender: CharacterGender;
}