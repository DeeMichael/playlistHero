import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

// import Yelp from '../../util/Yelp';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchResults : ['searchResult1'],
                   playlistName  : 'Name of Playlist',
                   playlistTracks: [
                     { name:'jack',
                       artist: 'jack black',
                       album: 'album1',
                       id: 23 },
                     { name:'jack',
                       artist: 'jack black',
                       album: 'album1',
                       id: 24 },
                     { name:'jack',
                       artist: 'jack black',
                       album: 'album1',
                       id: 25 }
                   ]
                 };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.setState({ playlistTracks: [...this.state.playlistTracks, track] })
    }
  }

  removeTrack(track) {
    this.setState({playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  render() {
    return (
      <div >
        <h1>playlist<span className="highlight">H</span>ero</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
