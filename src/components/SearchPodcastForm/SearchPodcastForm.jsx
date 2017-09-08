import React, {Component} from 'react';
import './SearchPodcastForm.css';

class SearchPodcastForm extends Component {
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
        <form className="col s12" onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="input-field col s12">
              <input type="text" placeholder="Search Podcast" id="search" value={this.state.search} onChange={(e) => this.handleChange('search', e)} />
              <label htmlFor="search">Search Podcast</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className="btn SearchPodcastForm-button">Submit</button>
            </div>
          </div>
        </form>
    );
  }
};

export default SearchPodcastForm;
