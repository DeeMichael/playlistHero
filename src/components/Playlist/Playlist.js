import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  render(){
    return(
      <div className="Playlist">
        <input defaultValue={this.props.playlistName} />
        <TrackList playlistTracks={this.props.playlistTracks} onRemove={this.props.onRemove} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
