import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import SearchPodcastForm from '../../components/SearchPodcastForm/SearchPodcastForm';
import SearchUserForm from '../../components/SearchUserForm/SearchUserForm';
import NavBar from '../../components/NavBar/NavBar';
import ShowPodcast from '../../components/ShowPodcast/ShowPodcast';
import ShowUser from '../../components/ShowUser/ShowUser';
import tokenService from './../../utils/tokenService';
import './SearchPage.css';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPodcastResult: [],
            searchUserResult: []
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
            console.log('***search podcast', data)
            var resultsArray = []
            resultsArray.push(data.results);
            this.setState({
                searchPodcastResult: [...resultsArray],
                searchUserResult: []
            });
        });    
    }

    searchUser = (searchValue) => {
        // console.log(searchValue);
        fetch('/api/users/searchUsers', {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + tokenService.getToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                searchValue: searchValue
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("***data back ", data);
            var resultsArray = []
            resultsArray.push(data);
            this.setState({
                searchUserResult: [...resultsArray],
                searchPodcastResult: []
            });
        }); 
    }

    render() {
        console.log(this.state.searchPodcastResult[0]);
        var showComponents;
        if(this.state.searchPodcastResult.length > 0){
            showComponents = 
                <div>
                    <ShowPodcast 
                        user={this.props.user}
                        podcasts={this.state.searchPodcastResult[0]}
                        history={this.props.history}
                        myLists={this.props.myLists}
                        addPodcast={this.props.addPodcast}
                        removePodcast={this.props.removePodcast}
                    />
                </div>
        } else if(this.state.searchUserResult.length > 0){
            showComponents = 
                <div>
                    <ShowUser
                        users={this.state.searchUserResult}
                        history={this.props.history}
                        myLists={this.props.myLists}
                        addPodcast={this.props.addPodcast}
                        removePodcast={this.props.removePodcast}
                        user={this.props.user}
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
                            searchPodcast={this.searchPodcast}
                            user={this.props.user}
                        />
                    </Col>
                    <Col s={6}>
                        <SearchUserForm 
                            {...this.props} 
                            searchUser={this.searchUser}
                            user={this.props.user}
                        />
                    </Col>
                </Row>    
                {showComponents}
            </div>
        )
    }
};

export default SearchPage;