import React from 'react';
import {Link} from 'react-router-dom';
// import $ from 'jquery';
import './ShowMyPodcastList.css';

const ShowMyPodcastList = (props) => {
    // var allPodcasts = props.topPodcasts.map((podcast, index) => {
    //     return (
    //         <div className="col s2" key={index}>
    //             <div className="card">
    //                 <div className="card-image">
    //                     <img src={podcast.artworkUrl600} alt={podcast.collectionName}/>
    //                 </div>
    //                 <div className="card-content">
    //                     <p>{podcast.collectionName}</p>
    //                 </div>
    //                 <div className="card-action">
    //                     <Link to={podcast.collectionViewUrl} target="_blank">Visit Podcast</Link>
    //                 </div>
    //             </div>
    //         </div>    
    //     )
           
    // });

    return (
        <div className="container">
           <p>{props.userName}</p>
      </div>
    );

};

export default ShowMyPodcastList;