import React from "react";


import '../styles/PongPage.css'
import Popup from './components/helpPopUp.js';
import GameInfo from './components/GameInfo';
import MenuButtons from './components/MenuButtons.js';
import VideoStream from "./components/VideoStream";
import PongExecutor from "./components/PongExecutor";


export default class PongPage extends React.Component {
	constructor(props){
		super();
		this.state = {
            showPopup : false,
            showMenu : true,
        }
        
    }

    togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
    } 
    
    toggleGame() {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

  

    render(props) {
        return (
            <div id = "container">
                <div id = "main">
                    <div id = "game-logo"><h1>EmoPong</h1></div>
                    { this.state.showMenu ? <MenuButtons toggleGame = {this.toggleGame} togglePopup = {this.togglePopup} parent = {this} /> :
                    <div id = "game">
                        <div id="leftSide">
                            <PongExecutor className="pong-executor" emotion={this.props.emotion}/>
                        </div>
                        <div id = "rightSide">
                            <GameInfo />
                            <div className="video-stream">
                                <VideoStream width={225} height={115} setEmotion={this.props.setEmotion} />
                            </div>
                        </div>
                    </div>    
                    }
        
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