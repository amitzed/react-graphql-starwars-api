const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');

const typeDefs = gql`
  type Person {
    id: ID
    name: String
    birth_year: String
    height: String
    mass: String
    hair_color: String
    gender: String
  }

  type Query {
    people: [Person]
  }
`;
