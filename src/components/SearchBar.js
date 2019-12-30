import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
          </div>
          <input type="text" onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
