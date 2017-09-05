import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ShowPodcast from '../../components/ShowPodcast/ShowPodcast';

let topPodcastsHC = ['TED Talks Daily', '99% Invisible', 'This American Life', 'Kickass News', 'The Daily', 'The Joe Rogan Experience', 'Revisionist History', 'Up First', "Dan Carlin's Hardcore History", 'Stuff You Should Know'];

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            topPodcasts: []
        }
    }

    componentWillMount(){
        topPodcastsHC.forEach(podcast => {
            podcast = podcast.replace(/ /ig, '+');
            var URI = `https://itunes.apple.com/search?term=${podcast}&media=podcast`
            fetch(URI, {
                method: 'get'
            }).then(response => response.json())
            .then(data => {
                this.setState( {topPodcasts: [...this.state.topPodcasts, data.results[0]] } );
                // console.log(data.results[0].collectionName);
            })
        });
    }

    render(){
        return (
            <div>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <ShowPodcast topPodcasts={this.state.topPodcasts}/>
            </div>
        );
    }
}

export default LandingPage;  