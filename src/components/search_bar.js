import React from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component{
  constructor(){
    super();

  }


  render(){
    return(
      <div onKeyDown={this.props.onEnter} className="search-bar">
      <input onChange={event => this.onInputChange(event.target.value)} placeholder="What do u want..."/>
      <button onClick={this.props.onClick} >Search</button>
  </div>
    );
  }
  onInputChange(searchText){
    this.props.onSearchTextChange(searchText);
  }
}



export default SearchBar;
