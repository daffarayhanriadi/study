import React from 'react';
import Joi from 'joi';
import { validateProps } from '../utils/validation';

const searchBarPropsSchema = Joi.object({
  search: Joi.func().required(),
  defaultKeyword: Joi.string().allow("").default(""),
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    const validatedProps = validateProps(searchBarPropsSchema, props, "SearchBar");

    this.state = {
      validatedProps,
      // keyword: props.defaultKeyword || ''
      keyword: validatedProps.defaultKeyword
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    // this.props.search(this.state.keyword);
    this.state.validatedProps.search(this.state.keyword);
  }

  onKeywordChangeHandler(event) {
    const { value } = event.target;

    this.setState(() => {
      return {
        keyword: value
      };
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="search movie by title"
          value={this.state.keyword}
          onChange={this.onKeywordChangeHandler}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;

