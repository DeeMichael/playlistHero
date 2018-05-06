import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  constructor(props){
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(searchItem){
    this.props.onSearch(searchItem);
  }

  handleTermChange(event){
    this.search(event.target.value);
  }

  render(){
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
