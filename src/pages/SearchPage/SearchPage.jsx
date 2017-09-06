import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SearchForm from '../../components/SearchForm/SearchForm'
import './SearchPage.css';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchInput: ''
    }
  }

  handleSearch = (search) => {
      this.setState({searchInput: search});
  }

  ComponentDidMount(){
    var podcast = podcast.replace(/ /ig, '+');
    var URI = `https://itunes.apple.com/search?term=${podcast}&media=podcast`
    fetch(URI, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }
  
  render() {
    return (
      <div>
        <NavBar 
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        <SearchForm
          {...this.props} 
          searchInput={this.state.searchInput}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
};

export default SearchPage;