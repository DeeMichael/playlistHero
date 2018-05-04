import React from 'react';
import './App.css';

// import BusinessList from '../BusinessList/BusinessList';
// import SearchBar from '../SearchBar/SearchBar';
// import Yelp from '../../util/Yelp';


class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = { businesses:[] };
  //   this.searchYelp = this.searchYelp.bind(this);
  // }

  // searchYelp(term, location, sortBy){
  //   Yelp.search(term, location, sortBy).then( businesses => {
  //     this.setState({businesses: businesses});
  //   });
  // }

  render() {
    return (
      <div >
        <h1>playlist<span class="highlight">H</span>ero</h1>
        <div class="App">
          <!-- Add a SearchBar component -->
          <div class="App-playlist">
            <!-- Add a SearchResults component -->
            <!-- Add a Playlist component -->
          </div>
        </div>
      </div>
    );
  }
}

export default App;
