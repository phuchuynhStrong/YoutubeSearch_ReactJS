import React from 'react';

class ListItem extends React.Component{


  render(){
    const thumbnails = this.props.video.snippet.thumbnails.default.url;
    return(
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={thumbnails}/>
          </div>
          <div className="media-body">
            <div className="media-heading">{this.props.video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;
