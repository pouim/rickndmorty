import { gql } from "graphql-request";

import { graphQLClient } from "gql/config";

const getAllCharactersQuery = gql`
  query getCharacters($pageNumber: Int!, $filter: FilterCharacter!) {
    characters(page: $pageNumber, filter: $filter) {
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

const getAllCharacters = (pageNumber = 1, filter = {}) =>
  graphQLClient.request(getAllCharactersQuery, { pageNumber, filter });

export { getAllCharacters };
