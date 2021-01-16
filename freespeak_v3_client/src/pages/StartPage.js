import React from "react";
import { Redirect,Link } from "react-router-dom";

import './Startpage.css'
import playButton from './icons/play_alt-512.png'


export default class StartPage extends React.Component {
	constructor(props){
		super();
		//this.state = {
			
		//}
    }

    render(props) {
        return (
            <div id = "container">
                <div id = "game-logo"><h1>EmoPong</h1></div>
                <div id = "playBtn">
                   <figure>
                        <img src={playButton} alt = "Play button" width="256 px" height="256 px" ></img>
                    </figure>    
                </div>
            </div>
        );
    }

}    