import { GraphQLClient } from "graphql-request";

export const BASE_URL = "https://rickandmortyapi.com/graphql";

export const graphQLClient = new GraphQLClient(BASE_URL);
