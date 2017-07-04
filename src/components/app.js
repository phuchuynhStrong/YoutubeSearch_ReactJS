import React from 'react';
import SearchBar from './search_bar.js';
import YouTube from 'youtube-api-search';
import ListItem from './video_list_item.js';
const API_KEY = 'AIzaSyA4emuKRBCZxfbijK0RHTKfX6DgvL2sLKk';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {videos: [],searchText: ''};

  }
  handleSearchClick = (event) => {
    this.search();
  }
  handleEnterKeyDown = (event) => {
    if (event.keyCode == 13) this.search();
  }
  handleSearchTextChange = (text) => {
    this.setState({searchText : text});
  }

  search(){
    YouTube({key: API_KEY,term: this.state.searchText},(videos) => {
      this.setState({videos});
    });
  }

this
  render() {
    return (
      <div className="container">
      <div className="header">
      <img className="media-object" src="https://vignette3.wikia.nocookie.net/youtube/images/f/f7/Youtube-logo.jpg/revision/latest?cb=20100325142741" />
      <SearchBar onClick={this.handleSearchClick} onSearchTextChange={this.handleSearchTextChange} onEnter={this.handleEnterKeyDown}/>
      </div>
      <div className="displayResult-object">{this.state.videos.map(video => <ListItem video={video} key={video.etag} />)}</div>
      </div>
    );
  }
}
