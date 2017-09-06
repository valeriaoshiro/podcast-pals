import React, {Component} from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import NavBar from '../../components/NavBar/NavBar';
import './SearchPage.css';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchValue: ""
    }
  }

  updateSearch = (search) => {
    this.setState({searchValue: search});
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
          updateSearch={this.updateSearch} 
        />
      </div>
    );
  }
};

export default SearchPage;