import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './AboutPage.css';

class AboutPage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
                <div className="container">
                    <h1 className="AboutPage-h1 center-align">About</h1>
                    <blockquote className="container">A podcast is an episodic series of digital audio or video files which a user can download and listen to. It is often available for subscription, so that new episodes are automatically downloaded via web syndication to the user's own local computer, mobile application, or portable media player. (Definition via Wikipedia)</blockquote>
                    <p><span className="AboutPage-color">PODCAST PALS</span> is a web app where users can discover new podcasts. You will be able to keep track of what your friends listen to and also share your favorite podcasts.
                    <br/>If you would like to know my favorite podcasts, search for my name: <span className="AboutPage-color">Valeria</span></p>
                    <br/>
                    <h4 className="AboutPage-h4 center-align">Contact</h4>
                    <p>If you have any questions or feedback, feel free to email me at <span className="AboutPage-color">contact@valeriaoshiro.com</span> or via Twitter <span className="AboutPage-color">@valeriaoshiro</span></p>
                </div>
            </div>
        )
    }
}

export default AboutPage;  