import React from "react";
import { Redirect,Link } from "react-router-dom";

import '../styles/Startpage.css'
import playButton from './icons/play_alt-512.png'
import playButtonHover from './icons/play_alt-512_hover.png'

export default class StartPage extends React.Component {
	constructor(props){
		super();
		this.state = {
			img : playButton
        }
        this.hoverMouse = this.hoverMouse.bind(this);
    }

    hoverMouse (active) {
        if (active) {
            this.setState({
                img: playButtonHover
            });
        } else {
            this.setState({
                img: playButton
            });
        }
    }

    render(props) {
        return (
            <div id = "container">
                <div id = "game-logo"><h1>EmoPong</h1></div>
                <div id = "playBtn" onMouseOver={() => this.hoverMouse(true)} onMouseOut={() => this.hoverMouse(false)}>
                   <Link to="/game">
                        <img src={this.state.img} alt = "Play button" width="256 px" height="256 px"></img>
                   </Link> 
                </div>
            </div>
        );
    }

}    