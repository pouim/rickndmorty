import { CharacterGender, CharacterStatus } from "utils";

export interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  status: CharacterStatus;
  species: string;
  subSpecies: string;
  gender: CharacterGender;
}