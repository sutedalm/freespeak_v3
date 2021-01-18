import React from 'react';  
import '../../styles/MenuButtons.css';  

const MenuButtons = ({ toggleGame, togglePopup, parent}) => {  


    

    return ( 
            <div id = "buttons">
                <div className = "btn" id = "playBtn">
                        <h2 onClick={toggleGame.bind(parent)}>Play</h2>
                </div>
                <div className = "btn" id = "helpBtn">
                    <h2 onClick={togglePopup.bind(parent)} >Help</h2> 
                </div>
            </div>   
          
        );    
}  

export default MenuButtons;