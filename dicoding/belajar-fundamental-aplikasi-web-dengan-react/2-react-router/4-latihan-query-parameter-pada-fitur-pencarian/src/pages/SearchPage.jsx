import React from "react";
import Joi from "joi";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { searchMovies } from "../utils/data";
import { validateProps } from "../utils/validation";

function SearchPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title");

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <SearchPage activeKeyword={title} onSearch={changeSearchParams} />;
}

const searchPagePropsSchema = Joi.object({
  onSearch: Joi.func().required(),
  activeKeyword: Joi.string().allow(null, "").optional(),
});

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    const validatedProps = validateProps(
      searchPagePropsSchema,
      props,
      "SearchPage",
    );

    this.state = {
      // foundMovies: [],
      foundMovies: validatedProps.activeKeyword ? searchMovies(validatedProps.activeKeyword) : [],
      validatedProps,
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        foundMovies: searchMovies(keyword),
      };
    });

    this.state.validatedProps.onSearch(keyword);
  }

  render() {
    return (
      <section>
        <h2>Search Movie</h2>
        <SearchBar search={this.onSearch} defaultKeyword={this.state.validatedProps.activeKeyword} />
        <MovieList movies={this.state.foundMovies} />
      </section>
    );
  }
}

// export default SearchPage;
export default SearchPageWrapper;
