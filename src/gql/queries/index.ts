import { gql } from "graphql-request";

import { graphQLClient } from "gql/config";

const getAllCharactersQuery = gql`
  query getCharacters($pageNumber: Int!) {
    characters(page: $pageNumber) {
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

const getAllCharacters = (pageNumber = 1) =>
  graphQLClient.request(getAllCharactersQuery, { pageNumber });

export { getAllCharacters };
