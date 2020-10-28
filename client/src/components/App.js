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
  <div className="content-wrapper">
    <div className="ui card">
      <div className="content card-content-title">
        <div className="header">{name}</div>
      </div>
      <div className="content card-content-inner">
        <h4 className="">Birth Year: {birth_year}</h4>
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              <div className="summary inner-info">
                 Height: {height}
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary inner-info">
                 Mass: {mass}
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary inner-info">
                 Hair Color: {hair_color}
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary inner-info">
                 Gender: {gender}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const App = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE);

  if(error) return <h1 style={{color: 'white'}}>Something Went Wrong</h1>
  if(loading) return <h1 style={{color: 'white'}}>Loading...</h1>

  return (
    <main className="app-wrapper">
      <h2 className="ui center aligned icon header">
        <i className="circular film icon app-logo"></i>
        <span className="app-header">Star Wars Characters</span>
      </h2>

      {data.people.map(person => (
        <Person person={person} />
      ))}
    </main>
  )
}

export default App;
