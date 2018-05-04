import React from 'react';
import './Track.css';


class Track extends React.Component {
  render(){
    return(
      <div class="Track">
        <div class="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        <a class="Track-action"><!-- + or - will go here --></a>
      </div>
    );
  }
}

export default Track;
