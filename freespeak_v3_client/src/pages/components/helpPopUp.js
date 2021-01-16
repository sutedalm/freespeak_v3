import React from 'react';  
import '../../styles/helpPopUp.css';  

class helpPopUp extends React.Component {  


    render() {  
        return ( 
          <div id = "popup" onClick={this.props.closePopup}>
            <div id = "popupInner">
                <div id = "helpTitle">
                    <h2>Instructions</h2><br></br>
                </div>
                <div id = "text">
                    <p>Use your face expressions to win the game!</p>
                    <p>Score points by sending the ball to the right side</p>
                    <p>And don't let your opponent stop the ball</p><br></br><br></br><br></br>
                    <p>Smile to move the paddle up</p>
                    <p>Show a surprised face to move the paddle down</p>
                </div>
                <div id = "helpTitle">
                    <h3>Click anywhere to close this pop up</h3><br></br>
                </div>
            </div>  
          </div>    
          
        );  
    }  
}  

export default helpPopUp;