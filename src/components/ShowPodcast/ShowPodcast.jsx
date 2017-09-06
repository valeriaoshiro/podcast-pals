import React from 'react';
import {Card, CardTitle, Row, Col, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';
import './ShowPodcast.css';

const ShowPodcast = (props) => {
    console.log("props ", props)
    var allPodcasts = props.podcasts.map((podcast, index) => {
        return (
            <Col s={4} key={index}>
                <Card
                    key={index}
                    className='small'
                    header={<CardTitle key={index} image={podcast.artworkUrl600}></CardTitle>}
                    actions={[<a href={podcast.collectionViewUrl} key={index} target="_blank">Visit Podcast</a>]}
                    >
                    <Link to=""><Icon small className="ShowPodcast-icon">star_border</Icon></Link> {podcast.collectionName}
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