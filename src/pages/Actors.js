import React, { useEffect, useState } from 'react';

function Actors() {
  const [actors, setActors] = useState([]);

  // Fetch actors data using useEffect
  useEffect(() => {
    // Fetch actors data and set it to the actors state
     fetchActors().then(data => setActors(data));
  }, []);

  return (
    <>
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {/* Render information about each actor */}
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
