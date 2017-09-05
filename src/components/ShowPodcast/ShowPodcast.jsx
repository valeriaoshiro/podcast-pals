import React from 'react';
import {Link} from 'react-router-dom';
// import $ from 'jquery';
import './ShowPodcast.css';

const ShowPodcast = (props) => {
    // props.topPodcasts.forEach(podcast => {
    //     console.log("******", podcast) }
    // )
    var allPodcasts = props.topPodcasts.map((podcast, index) => {
        return (
            <div className="col s2">
                <div className="card">
                    <div className="card-image">
                        <img src={podcast.artworkUrl600} />
                    </div>
                    <div className="card-content">
                        <p>{podcast.collectionName}</p>
                    </div>
                    <div className="card-action">
                        <Link to={podcast.collectionViewUrl} target="_blank">Visit Podcast</Link>
                    </div>
                </div>
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