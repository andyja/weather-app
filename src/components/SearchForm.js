import React, { useRef } from "react";
import PropTypes from "prop-types";

function SearchForm(props) {
  const { onSubmit } = props;

  const inputElement = useRef(null);

  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="enter a city here for forecast..."
        ref={inputElement}
      />
      <button
        type="submit"
        onClick={() => {
          onSubmit(inputElement.current.value);
        }}
      >
        Search for city
      </button>
    </div>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
