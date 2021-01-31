import React from "react";
import { Link } from "react-router-dom";
import '../styles/GameLibrary.css'

export default class GamesLibrary extends React.Component {
    render(props) {
        return (
            <div id = "library">
                    <div id="header"><h1>FreeSpeak Games</h1></div>
                    <div id="list">
                        <div className="game"><div id="pongSelection"><Link to={'/emopong'}>EmoPong</Link><Link id="arrowRight" to={'/emopong'}>&#10095;</Link></div></div>
                        <div className="game"><a>More games to come ...</a></div>
                    </div>
            </div>
        );
    }    
}