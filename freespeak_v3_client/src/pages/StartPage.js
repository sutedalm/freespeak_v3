import React from "react";
import { Redirect,Link } from "react-router-dom";

import '../styles/Startpage.css'
import Popup from './components/helpPopUp.js';

export default class StartPage extends React.Component {
	constructor(props){
		super();
		this.state = {
			showPopup : false
        }
        
    }

    togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
    } 

    

    render(props) {
        return (
            <div id = "container">
                <div id = "main">
                    <div id = "game-logo"><h1>EmoPong</h1></div>
                    <div id = "buttons">
                        <div className = "btn" id = "playBtn">
                            <Link to="/game">
                                <h2>Play</h2>
                            </Link> 
                        </div>
                        <div className = "btn" id = "helpBtn">
                            <h2 onClick={this.togglePopup.bind(this)} >Help</h2> 
                        </div>
                    </div>
                </div>   
                <div id = "about">
                    Created by Almo, Maria and Jack
                </div>
                {this.state.showPopup ?  <Popup  
                closePopup={this.togglePopup.bind(this)} /> : null } 
            </div>
        );
    }

}    