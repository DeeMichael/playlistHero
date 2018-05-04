import React from 'react';
import './Playlist.css';


class Playlist extends React.Component {
  render(){
    return(
      <div class="Playlist">
        <input value="New Playlist"/>
        <!-- Add a TrackList component -->
        <a class="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
