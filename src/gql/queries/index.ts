import request, { gql } from "graphql-request";

import { BASE_URL } from "gql/config";

const getAllCharactersQuery = gql`
  query {
    characters(page: 1) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        gender
        status
        species
        type
        image
      }
    }
  }
`;

const getAllCharacters = () => request(BASE_URL, getAllCharactersQuery);

export { getAllCharacters };
