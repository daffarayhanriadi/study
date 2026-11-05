import React from 'react';
import Joi from 'joi';
import MovieItem from './MovieItem';
import { validateProps } from '../utils/validation';

const movieListPropsSchema = Joi.object({
  movies: Joi.array().items(
    Joi.object({
      backdropPath: Joi.string().uri().required(),
      id: Joi.number().integer().positive().required(),
      overview: Joi.string().required(),
      posterPath: Joi.string().uri().required(),
      releaseDate: Joi.string().isoDate().required(),
      title: Joi.string().trim().required(),
    })
  ).required(),
});

function MovieList(props) {
  const validatedProps = validateProps(movieListPropsSchema, props, "MovieList")
  const { movies } = validatedProps;

  if (!movies.length) {
    return <p>No movie found</p>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;

