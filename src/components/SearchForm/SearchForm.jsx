import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleChange = (field, e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.search);
  }

  render() {
    return (
      <div className="row">
        <h1 className="center-align SearchForm-h1">Search</h1>
        <form className="col s6 offset-s3" onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="input-field col s12">
              <input type="text" className="validate" placeholder="Search" id="search" value={this.state.search} onChange={(e) => this.handleChange('search', e)} />
              <label for="search">Search Podcasts</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className="btn SignupForm-button">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default SearchForm;
