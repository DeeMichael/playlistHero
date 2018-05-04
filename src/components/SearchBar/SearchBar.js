import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     term:'',
  //     location:'',
  //     sortBy:'best_match',
  //   };
  //
  //   this.handleTermChange     = this.handleTermChange.bind(this);
  //   this.handleLocationChange = this.handleLocationChange.bind(this);
  //   this.handleSearch         = this.handleSearch.bind(this);
  //   this.handleSortByChange = this.handleSortByChange.bind(this);
  //
  //   this.sortByOptions = {
  //     'Best Match': 'best_match',
  //     'Highsest Rated': 'rating',
  //     'Most Reviewed': 'review_count',
  //   };
  // }
  //
  //
  // getSortByClass(sortByOption){
  //   if (this.state.sortBy === sortByOption) {
  //     return 'active';
  //   } else {
  //     return '';
  //   }
  // }
  //
  // handleSortByChange(sortByOption){
  //   this.setState({sortBy: sortByOption});
  // }
  //
  // handleTermChange(event){
  //   this.setState({term: event.target.value});
  // }
  //
  // handleLocationChange(event){
  //   this.setState({location: event.target.value});
  // }
  //
  // handleSearch(event){
  //   this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  //   event.preventDefault();
  // }
  //
  // renderSortByOptions(){
  //   return Object.keys(this.sortByOptions).map(sortByOption => {
  //     let sortByOptionValue = this.sortByOptions[sortByOption];
  //     return (<li key={sortByOptionValue}
  //                 className={this.getSortByClass(sortByOptionValue)}
  //                 onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>
  //                {sortByOption}
  //             </li>);
  //   });
  // }

  render(){
    return (
      <div class="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
