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

const resolvers = {
  Query: {
    people: async () => {
      try {
        const people = await axios.get('https://swapi.dev/api/people/')

        return people.data.results.map(({ id, name, birth_year, height, mass, hair_color, gender }) => ({
          id,
          name,
          birth_year,
          height,
          mass,
          hair_color,
          gender
        }))
      } catch (error) {
        throw error
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen()
.then(({ url }) => console.log(`Server is ready at ${url}`))
