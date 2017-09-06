import React from 'react';
import {Card, CardTitle, Row, Col} from 'react-materialize';
import './ShowPodcast.css';

const ShowPodcast = (props) => {
    var allPodcasts = props.topPodcasts.map((podcast, index) => {
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


            // <div className="col s2" key={index}>
            //     <div className="card">
            //         <div className="card-image">
            //             <img src={podcast.artworkUrl600} alt={podcast.collectionName}/>
            //         </div>
            //         <div className="card-content">
            //             <p>{podcast.collectionName}</p>
            //         </div>
            //         <div className="card-action">
            //             <Link to={podcast.collectionViewUrl} target="_blank">Visit Podcast</Link>
            //         </div>
            //     </div>
            // </div>    
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