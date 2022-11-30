import { CharacterGender } from "utils/types";

/**
 * @description to generate prefix for a name based on the given gender.
 * ex: generateGenderPrefix('Alex', 'Male') => Mr. Alex
 * @function generateGenderPrefix
 * @param { string } name
 * @param { CharacterGender } gender
 * @returns { string }
 */
export function generateGenderPrefix(name: string, gender: CharacterGender) {
  const genderPrefixList = {
    Male: "Mr",
    Female: "Mrs",
  };

  if (gender === "unknown") {
    return name;
  }

  return `${genderPrefixList[gender]}. ${name}`;
}