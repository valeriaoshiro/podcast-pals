import React from 'react';
// import {Link} from 'react-router-dom';
// import $ from 'jquery';

const ShowPodcast = (props) => {
    props.topPodcasts.forEach(prop => {
        console.log(prop) }
    )
    // var allPodcasts = props.topPodcasts.map((podcast, index) => {
    //     if (podcast){
    //         return <li key={index}>{podcast}</li>

    //     }
    // });

    return (
      <div>
        <ul>
            {/*{allPodcasts}*/}
        </ul>
      </div>
    );

};

export default ShowPodcast;