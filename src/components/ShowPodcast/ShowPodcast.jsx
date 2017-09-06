import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardTitle} from 'react-materialize';
import './ShowPodcast.css';

const ShowPodcast = (props) => {
    var allPodcasts = props.topPodcasts.map((podcast, index) => {
        return (
            <div>
            <Card className='small' key={index}
                header={<CardTitle image={podcast.artworkUrl600}></CardTitle>}
                actions={[<Link to={podcast.collectionViewUrl} target="_blank">Visit Podcast</Link>]}>
                {podcast.collectionName}
            </Card>   
            </div>
        )
           
    });

    return (
        <div className="container">
            <div className="row">
                {allPodcasts}
            </div>    
        </div>
    );

};

export default ShowPodcast;