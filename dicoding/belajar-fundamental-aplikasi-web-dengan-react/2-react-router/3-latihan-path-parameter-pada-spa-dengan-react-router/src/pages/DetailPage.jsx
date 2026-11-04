import React from 'react';
import Joi from 'joi';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';
import { getMovie } from '../utils/data';
import { validateProps } from '../utils/validation';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={Number(id)} />;
}

const detailPagePropsSchema = Joi.object({
  id: Joi.number().integer().positive().optional(),
});

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    const validatedProps = validateProps(detailPagePropsSchema, props, "DetailPage");

    // cannot using Hooks inside class component
    // const { id } = useParams();

    this.state = {
      // movie: getMovie(Number(id))
      movie: getMovie(validatedProps.id),
    };
  }

  render() {
    if (this.state.movie === null) {
      return <p>Movie is not found!</p>;
    }

    return (
      <section>
        <MovieDetail {...this.state.movie} />
      </section>
    );
  }
}

// export default DetailPage;
export default DetailPageWrapper;

