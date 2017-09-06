import React, {Component} from 'react';
import {Card, CardTitle, Row, Col, Icon} from 'react-materialize';
// import tokenService from './../../utils/tokenService';
import './ShowMyPodcastList.css';

class ShowMyPodcastList extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    handleClick = (podcast) => {
        // console.log(podcast);
        this.props.removePodcast(podcast);
        // console.log(podcast._id)
        // fetch('/api/podcasts/podcast._id?_method=DELETE', {
        //     method: 'POST',
        //     headers: new Headers({ 'Authorization': 'Bearer ' + tokenService.getToken() })
        // })
        // .then(response => {
        //     console.log("delete successful");
        // })
    }

    render(){
        if(this.props.userName){
            var allPodcasts = this.props.userLists.map((podcast, index) => {
                    return (
                        <Col s={3} key={index}>
                            <Card
                                key={index}
                                className='small'
                                header={<CardTitle key={index} image={podcast.cover}></CardTitle>}
                                actions={[<a href={podcast.url} key={index} target="_blank">Visit Podcast</a>]}
                                >
                                <button onClick={() => this.handleClick(podcast)} className="ShowPodcast-button"><Icon small className="ShowPodcast-icon">delete</Icon></button>
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
        )
    }
}

export default ShowMyPodcastList;