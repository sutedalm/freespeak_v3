import "../../styles/PongExecutor.css";

import React, { useEffect, useState } from "react";
// import Pong, { DIRECTION } from "./pong_canvas";
import PongCanvas from "./pong_canvas2"

const PongExecutor = ({emotion}) => {
  // useEffect(() => {
  //   Pong.initialize();
  //   // handleEmotion(emotion);
  // }, []);
  let pongCanvas;

  useEffect(() => {
    var canvas = document.getElementById('gameCanvas');
    var startMenu = document.getElementById('startMenu'),
    pauseMenu = document.getElementById('pauseMenu'),
    gameOverMenu = document.getElementById('gameOverMenu'),
    gameplay = document.getElementById('gameplay'),
    startBtn = document.getElementById('startBtn'),
    continueBtn = document.getElementById('continueBtn'),
    restartBtn = document.getElementById('restartBtn'),
    againBtn = document.getElementById('againBtn'),
    gameMessage = document.getElementById('gameMessage');

    pongCanvas = new PongCanvas(canvas, startMenu, pauseMenu, gameOverMenu, gameplay, startBtn, continueBtn, restartBtn, againBtn, gameMessage)

    // startMenu.className = 'active';
    // pauseMenu.className = '';
    // gameplay.className = '';
    // gameOverMenu.className = '';
  }, [])

  useEffect(() => {
    handleEmotion(emotion)
  }, [emotion]);

  function handleEmotion(em) {
    console.log(em)
    // if (!pong) {
    //   console.log('no pong canvas')
    //   return
    // }
    // console.log(Pong.running)

    // // if(Pong.running === false) {
    // //   Pong.running = true;
    // //   window.requestAnimationFrame(() => Pong.loop());
    // // }

    // if (Pong.running) {
    //   if (em === 'happy')
    //     Pong.player.move = DIRECTION.UP;

    //   else if (em === 'surprised')
    //     Pong.player.move = DIRECTION.DOWN;

    //   else if (em === 'neutral')
    //     Pong.player.move = DIRECTION.IDLE;
    // }

    // if(pongCanvas != null) {

    if (pongCanvas.gameInProcess) {
        if(em === 'happy') {
          pongCanvas.paddleOneDirectionY = 'up';

        } else if(em === 'surprised') {
          pongCanvas.paddleOneDirectionY = 'down';

        }
      // }
    }
  }


  return <div id="wrap">
  <div id="startMenu">
    <h1>Pong</h1>
    <button id="startBtn">Start</button>
  </div>
  <div id="pauseMenu">
    <h1>Pause</h1>
    <button id="continueBtn">Continue</button>
    <button id="restartBtn">Restart</button>
  </div>
  <div id="gameOverMenu">
    <h1 id="gameMessage"></h1>
    <button id="againBtn">Try again</button>
  </div>
  <div id="gameplay">
    <canvas id="gameCanvas" width="800" height="600"></canvas>
  </div>
</div>

};

export default PongExecutor;