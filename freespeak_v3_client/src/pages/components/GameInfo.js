import '../../styles/MenuButtons.css'; 
import React, { useEffect, useState } from "react"; 

const GameInfo = () => {



    return (
        <div id = "game-info">
            <br></br>
            <h3>You</h3>
            <h3 id = "playerScore">0</h3>
            <br></br>
            <h3>CPU</h3>
            <h3 id = "oppScore">0</h3>
            <br></br>
            <h3>Current emotion:</h3>
            <h3 id = "currentEmotion" >-</h3>
            <br></br>
        </div>
    );
} 

export default GameInfo;