import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import './App.css';

const GET_PEOPLE = gql`
  {
    people {
      name
      birth_year
      height
      mass
      hair_color
      gender
    }
  }
`;

const Person = ({ person: { name, birth_year, height, mass, hair_color, gender }}) => (
  <div>
    <h2>{name}</h2>
  </div>
)

const App = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE);

  if(error) return <h1>Something Went Wrong</h1>
  if(loading) return <h1>Loading...</h1>

  return (
    <main className="">
      App
      {data.people.map(person => (
        <Person person={person} />
      ))}
    </main>
  )
}

export default App;
