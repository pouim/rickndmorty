export type Episode = {
  id: number;
  name: string;
};

export type Location = {
  id: number;
  name: string;
};

export type Origin = {
  id: number;
  name: string;
};

export type CharacterGender = "Male" | "Female" | "unknown";
export type CharacterStatus = "Alive" | "Dead" | "unknown";

export type Character = {
  created: string;
  episode: Episode[];
  gender: CharacterGender;
  id: string;
  name: string;
  image: string;
  status: CharacterStatus;
  species: string;
  type: string;
  location: Location;
  origin: Origin;
};
