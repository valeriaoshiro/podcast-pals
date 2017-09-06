import React from 'react';
import {Card, CardTitle, Row, Col} from 'react-materialize';
import './ShowPodcast.css';

const ShowPodcast = (props) => {
    console.log("props ", props)
    var allPodcasts = props.podcasts.map((podcast, index) => {
        return (
            <Col s={3} key={index}>
                <Card
                    key={index}
                    className='small'
                    header={<CardTitle key={index} image={podcast.artworkUrl600}></CardTitle>}
                    actions={[<a href={podcast.collectionViewUrl} key={index} target="_blank">Visit Podcast</a>]}>
                    {podcast.collectionName}
                </Card>

            </Col> 
        )
           
    });

    return (
        <div className="container">
            <Row>
                {allPodcasts}
            </Row>    
      </div>
    );

};

export default ShowPodcast;