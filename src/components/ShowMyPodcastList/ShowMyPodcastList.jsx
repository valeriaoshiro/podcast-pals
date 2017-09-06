import React from 'react';
import {Card, CardTitle, Row, Col} from 'react-materialize';
import './ShowMyPodcastList.css';

const ShowMyPodcastList = (props) => {
    if(props.userName){
        var allPodcasts = props.userLists.map((podcast, index) => {
            console.log(podcast)
                return (
                    <Col s={3} key={index}>
                        <Card
                            key={index}
                            className='small'
                            header={<CardTitle key={index} image={podcast.cover}></CardTitle>}
                            actions={[<a href={podcast.url} key={index} target="_blank">Visit Podcast</a>]}
                            >
                            {podcast.name}
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
    );

};

export default ShowMyPodcastList;