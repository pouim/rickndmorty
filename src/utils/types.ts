export type Episode = {
  id: number;
};

export type CharacterGender = "Male" | "Female" | "unknown";

export type Character = {
  created: string;
  episode: Episode[];
  gender: CharacterGender;
  id: string;
  name: string;
};