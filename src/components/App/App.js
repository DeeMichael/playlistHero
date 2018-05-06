import React from 'react';
import './App.css';

import Spotify from '../../util/Spotify';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

// import Yelp from '../../util/Yelp';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { searchResults : [],
                   playlistName  : 'My Playlist',
                   playlistTracks: []
                 };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.setState({ playlistTracks: [...this.state.playlistTracks, track] });
    }
  }

  removeTrack(track) {
    this.setState({playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  savePlaylist(){
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
        this.setState({
        playlistName: 'My New Playlist',
        playlistTracks: []
      });
    });
  }

  search(term){
    Spotify.search(term)
      .then(searchResults => {
        this.setState({searchResults: searchResults})
      });
  }

  render() {
    return (
      <div>
        <h1>playlist<span className="highlight">H</span>ero</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist
              playlistName={this.state.playlistName}
              tracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
