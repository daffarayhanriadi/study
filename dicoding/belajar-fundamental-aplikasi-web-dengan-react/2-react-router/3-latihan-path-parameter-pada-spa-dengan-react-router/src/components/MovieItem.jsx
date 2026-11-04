import React from 'react';
import Joi from 'joi';
import { Link } from 'react-router-dom';
import { validateProps } from '../utils/validation';

const movieItemPropsSchema = Joi.object({
  backdropPath: Joi.string().uri().required(),
  id: Joi.number().integer().positive().required(),
  overview: Joi.string().required(),
  posterPath: Joi.string().uri().required(),
  releaseDate: Joi.string().isoDate().required(),
  title: Joi.string().trim().required(),
});

function MovieItem(props) {
  const validatedProps = validateProps(movieItemPropsSchema, props, "MovieItem");
  const { backdropPath, id, overview, title } = validatedProps;

  return (
    <article>
      <img src={backdropPath} alt={title} />
      <h3>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h3>
      <p>{overview}</p>
    </article>
  );
}

export default MovieItem;

