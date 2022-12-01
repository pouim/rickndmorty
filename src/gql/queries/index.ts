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

const getSpecificCharacterQuery = gql`
  query getCharacters($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        name
      }
      created
    }
  }
`;

const getAllCharacters = (pageNumber = 1, filter = {}) =>
  graphQLClient.request(getAllCharactersQuery, { pageNumber, filter });

const getCharacterDetail = (id: number) =>
  graphQLClient.request(getSpecificCharacterQuery, { id });

export { getAllCharacters, getCharacterDetail };
