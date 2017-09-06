import React, {Component} from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import NavBar from '../../components/NavBar/NavBar';
import ShowPodcast from '../../components/ShowPodcast/ShowPodcast';
import './SearchPage.css';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: []
        }
    }

    searchPodcast = (searchValue) => {
        var podcast = searchValue.replace(/ /ig, '+');
        var URI = `https://itunes.apple.com/search?term=${podcast}&media=podcast&limit=25`
        fetch(URI, {
            method: 'get'
        })
        .then(response => response.json())
        .then(data => {
            var resultsArray = []
            resultsArray.push(data.results);
            this.setState( {searchResult: [...resultsArray]} );
        });    
    }

    render() {
        console.log(this.state.searchResult[0]);
        var showComponents;
        if(this.state.searchResult.length > 0){
            showComponents = 
                <div>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <SearchForm 
                    {...this.props} 
                    updateSearch={this.updateSearch} 
                    searchPodcast={this.searchPodcast}
                />
                <ShowPodcast podcasts={this.state.searchResult[0]}/>
                </div>
        } else {
            showComponents = 
                <div>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <SearchForm 
                    {...this.props} 
                    updateSearch={this.updateSearch} 
                    searchPodcast={this.searchPodcast}
                />
                </div>
        }
        return (
            <div>
                {showComponents}
            </div>
        )
    }
};

export default SearchPage;