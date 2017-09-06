import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ShowPodcast from '../../components/ShowPodcast/ShowPodcast';
import './LandingPage.css';

let topPodcastsHC = ['TED Talks Daily', '99% Invisible', 'This American Life', 'Kickass News', 'The Daily', 'The Joe Rogan Experience', 'Revisionist History', 'Up First', "Dan Carlin's Hardcore History", 'Stuff You Should Know'];

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            topPodcasts: []
        }
    }

    componentWillMount(){
        var promises = [];
        topPodcastsHC.forEach(podcast => {
            podcast = podcast.replace(/ /ig, '+');
            var URI = `https://itunes.apple.com/search?term=${podcast}&media=podcast`
            promises.push(fetch(URI, {
                    method: 'GET'
                })
                .then(response => response.json())
            );
        });

        Promise.all(promises)
            .then(results => {
                var resultsArray = [];
                results.forEach(data => {
                    resultsArray.push(data.results[0]);
                })
            
                this.setState( {topPodcasts: [...resultsArray] } );
            })
    }

    render(){
        return (
            <div>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <h1 className="LandingPage-h1 center-align">Top Podcasts</h1>
                <ShowPodcast topPodcasts={this.state.topPodcasts}/>
            </div>
        );
    }
}

export default LandingPage;  