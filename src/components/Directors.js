import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsList = directors.map((directors) => (
    <div key={directors.name} >
      <h2>Name: {directors.name}</h2>
      Movies:
      <ul>
        {directors.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (<div>{/*{code here}*/}
    <h1>Directors Page</h1>
    {directorsList}
  </div>);
}

export default Directors;
