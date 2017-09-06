import React from 'react';
import {Link} from 'react-router-dom';
// import $ from 'jquery';
import {Card, CardTitle} from 'react-materialize';
import './ShowPodcast.css';

const ShowPodcast = (props) => {
    var allPodcasts = props.topPodcasts.map((podcast, index) => {
        return (
            <div className="col s2" key={index}>
                <Card 
                    className='small'
                    key={index}
                    header={<CardTitle key={index} image='img/sample-1.jpg'>Card Title</CardTitle>}
                    actions={[<a key={index} href='#'>This is a Link</a>]}>
                    I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
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