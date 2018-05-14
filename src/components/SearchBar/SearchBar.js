import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      term: ''
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  search(){
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event){
    this.setState({term: event.target.value});
  }

  handleEnterKey(event){
    if (event.keyCode === 13) {
      this.search();
    }
  }

  handleOnFocus(event){
    let input = event.target;
    if (!input.value) {
      input.setAttribute("placeholder","");
    }
  }

  handleOnBlur(event){
    let input = event.target;
    if (!input.value) {
      input.setAttribute("placeholder","Enter A Song, Album, or Artist");
    }
  }

  render(){
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyUp={this.handleEnterKey} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} />
        <a onClick={this.search} >SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
