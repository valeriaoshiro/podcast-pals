import React, {Component} from 'react';
import {Card, CardTitle, Row, Col, Icon} from 'react-materialize';
import tokenService from './../../utils/tokenService';
import './ShowPodcast.css';

var allPodcasts;

class ShowPodcast extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick = (podcast) => {
        fetch('/api/podcasts', {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + tokenService.getToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                collectionName: podcast.collectionName,
                primaryGenreName: podcast.primaryGenreName,
                artworkUrl600: podcast.artworkUrl600,
                collectionId: podcast.collectionId,
                collectionViewUrl: podcast.collectionViewUrl
            })
        })
        .then(response => response.json())
        .then(response => {
            this.props.addPodcast(response);
            this.props.history.push('/podcasts');
        })
    }

    render(){
        allPodcasts = this.props.podcasts.map((podcast, index) => {
            return (
                <Col s={4} key={index}>
                    <Card
                        key={index}
                        className='small'
                        header={<CardTitle key={index} image={podcast.artworkUrl600}></CardTitle>}
                        actions={[<a href={podcast.collectionViewUrl} key={index} target="_blank">Visit Podcast</a>]}
                        >
                        <button onClick={() => this.handleClick(podcast)} className="ShowPodcast-button"><Icon small className="ShowPodcast-icon">star</Icon></button>
                        {podcast.collectionName}
                    </Card>
                </Col> 
            )
            
        });

        return (
            <div className="container ShowPodcast">
                <Row>
                    {allPodcasts}
                </Row>    
        </div>
        );

    }

};

export default ShowPodcast;