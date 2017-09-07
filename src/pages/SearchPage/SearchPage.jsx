import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import SearchPodcastForm from '../../components/SearchPodcastForm/SearchPodcastForm';
import SearchUserForm from '../../components/SearchUserForm/SearchUserForm';
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

    searchUser = (searchValue) => {}

    render() {
        console.log(this.state.searchResult[0]);
        var showComponents;
        if(this.state.searchResult.length > 0){
            showComponents = 
                <div>
                <ShowPodcast 
                    podcasts={this.state.searchResult[0]}
                    history={this.props.history}
                />
                </div>
        } else {
            showComponents = 
                <div>
                </div>
        }
        return (
            <div>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <h1 className="center-align SearchPage-h1">Search</h1>
                <Row className="container">
                    <Col s={6}>
                        <SearchPodcastForm 
                            {...this.props} 
                            updateSearch={this.updateSearch} 
                            searchPodcast={this.searchPodcast}
                        />
                    </Col>
                    <Col s={6}>
                        <SearchUserForm 
                            {...this.props} 
                            updateSearch={this.updateSearch} 
                            searchUser={this.searchUser}
                        />
                    </Col>
                </Row>    
                {showComponents}
            </div>
        )
    }
};

export default SearchPage;