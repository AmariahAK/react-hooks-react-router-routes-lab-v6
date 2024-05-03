import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
  // Get URL parameter data using useParams
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // Fetch movie data using useEffect
  useEffect(() => {
    // Fetch movie data based on the id parameter
    fetchMovieById(id).then(data => setMovie(data));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>; // Display loading indicator while fetching movie data
  }

  return (
    <>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Time: {movie.time}</p>
        <div>
          Genres:
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
