import React, { useState } from "react";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    props.onFormSubmit(term);
    setTerm("");
  };

  return (
    <div className="searchBar ui segment">
      <form className="ui form" onSubmit={onSubmitForm}>
        <div className="searchBar__field">
          <label>Video Search</label>
          <input type="text" onChange={onInputChange} value={term} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
