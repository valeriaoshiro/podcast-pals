import React, {Component} from 'react';
import {Card, CardTitle, Row, Col, Icon} from 'react-materialize';
import tokenService from './../../utils/tokenService';
import './ShowMyPodcastList.css';

class ShowMyPodcastList extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    handleClick = (podcast) => {
        this.props.removePodcast(podcast);
        fetch(`/api/podcasts/${podcast._id}`, {
            method: 'DELETE',
            headers: new Headers({ 'Authorization': 'Bearer ' + tokenService.getToken() })
        })
        .then(response => response.json())
        .then(response => {
            this.props.history.push('/podcasts');
        })
    }

    render(){
        console.log('this.props.myLists', this.props.myLists)
        if(this.props.myLists.length > 0){
            var allPodcasts = this.props.myLists.map((podcast, index) => {
                    return (
                        <Col s={4} key={index}>
                            <Card
                                key={index}
                                className='small'
                                header={<CardTitle key={index} image={podcast.artworkUrl600}></CardTitle>}
                                actions={[<a href={podcast.collectionViewUrl} key={index} target="_blank">Visit Podcast</a>]}
                                >
                                <button onClick={() => this.handleClick(podcast)} className="ShowPodcast-button"><Icon small className="ShowPodcast-icon">delete</Icon></button>
                                {podcast.collectionName}
                            </Card>
                        </Col> 
                    )    
                });
        }
        return (
            <div className="container ShowMyPodcastList">
                <Row>
                    {allPodcasts}
                </Row>
            </div>
        )
    }
}

export default ShowMyPodcastList;