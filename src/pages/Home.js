import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  // Fetch movies data using useEffect
  useEffect(() => {
    // Fetch movies data and set it to the movies state
     fetchMovies().then(data => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {/* Render list of movies using MovieCard components */}
        {movies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} id={movie.id} />
        ))}
      </main>
    </>
  );
}

export default Home;
