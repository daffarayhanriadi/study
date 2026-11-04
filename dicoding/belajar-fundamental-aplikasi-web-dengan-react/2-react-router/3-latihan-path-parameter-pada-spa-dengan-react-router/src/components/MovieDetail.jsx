import React from 'react';
import Joi from 'joi';
import { validateProps } from '../utils/validation';

const movieDetailPropsSchema = Joi.object({
  backdropPath: Joi.string().uri().required(),
  id: Joi.number().integer().positive().required(),
  overview: Joi.string().required(),
  posterPath: Joi.string().uri().required(),
  releaseDate: Joi.string().isoDate().required(),
  title: Joi.string().trim().required(),
});

function MovieDetail(props) {
  const validatedProps = validateProps(movieDetailPropsSchema, props, "MovieDetail")
  const { title, overview, posterPath, releaseDate } = validatedProps;

  return (
    <div>
      <img src={posterPath} alt={title} />
      <h2>{title}</h2>
      <p>Release date: {releaseDate}</p>
      <p>{overview}</p>
    </div>
  );
}

export default MovieDetail;

