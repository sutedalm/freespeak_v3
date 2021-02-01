import React from "react";
import { Link } from "react-router-dom";
import '../styles/GameLibrary.css'

export default class GamesLibrary extends React.Component {

    showMessage() {
        alert('This is just a mockup. Try out EmoPong for a working game!')
    }

    render(props) {
        return (
            <div id = "library">
                    <div id="header"><h1>FreeSpeak Games</h1></div>
                    <div id="list">
                        <div className="column" style={{backgroundColor: '#D5D2AA'}}>
                            <div className="gameCategory">Face expression training</div>
                            <div className="game" style={{backgroundColor: '#BD9D1C'}}><Link to={'/emopong'} className="symbol">&#9786;</Link><Link to={'/emopong'}>EmoPong</Link></div>
                            <div className="game" style={{backgroundColor: '#E5BE20'}}><a className="symbol" onClick={ this.showMessage.bind(this) }>&#9787;</a><a onClick={ this.showMessage.bind(this) }>Face it!</a></div>
                        </div>
                        <div className="column" style={{backgroundColor: '#B3D5AA'}}>
                            <div className="gameCategory">Talking speed training</div>
                            <div className="game" style={{backgroundColor: '#68B01A'}}><a className="symbol" onClick={ this.showMessage.bind(this) }>&#9822;</a><a onClick={ this.showMessage.bind(this) }>Words race</a></div>
                            <div className="game" style={{backgroundColor: '#7FD620'}}><a className="symbol" onClick={ this.showMessage.bind(this) }>&#9991;</a><a onClick={ this.showMessage.bind(this) }>Test your speed</a></div>
                        </div>
                        <div className="column" style={{backgroundColor: '#AACAD5'}}>
                            <div className="gameCategory">Storytelling</div>
                            <div className="game" style={{backgroundColor: '#348BA9'}}><a className="symbol" onClick={ this.showMessage.bind(this) }>&#x1f56e;</a><a onClick={ this.showMessage.bind(this) }>Tell a story!</a></div>
                            <div className="game" style={{backgroundColor: '#42ACD1'}}><a className="symbol" onClick={ this.showMessage.bind(this) } >3</a><a onClick={ this.showMessage.bind(this) }>3 words 1 story</a></div>
                        </div>
                    </div>
            </div>
        );
    }    
}