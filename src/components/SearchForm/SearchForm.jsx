import React, {Component} from 'react';
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
    this.props.searchPodcast(this.state.search);
  }

  render() {
    return (
      <div className="row">
        <h1 className="center-align SearchForm-h1">Search</h1>
        <form className="col s6 offset-s3" onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="input-field col s12">
              <input type="text" className="validate" placeholder="Search Podcast" id="search" value={this.state.search} onChange={(e) => this.handleChange('search', e)} />
              <label htmlFor="search">Search Podcast</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className="btn SearchForm-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default SearchForm;
