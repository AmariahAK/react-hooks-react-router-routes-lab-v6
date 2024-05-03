import React, { useEffect, useState } from 'react';

function Directors() {
  const [directors, setDirectors] = useState([]);

  // Fetch directors data using useEffect
  useEffect(() => {
    // Fetch directors data and set it to the directors state
     fetchDirectors().then(data => setDirectors(data));
  }, []);

  return (
    <>
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        {/* Render information about each director */}
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
