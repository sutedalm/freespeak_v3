import React, { useEffect, useState } from "react";
import Pong, { DIRECTION } from "./pong_canvas";

const PongExecutor = ({emotion}) => {
  useEffect(() => {
    Pong.initialize();
    // handleEmotion(emotion);
  }, []);

  useEffect(() => {
    handleEmotion(emotion)
  }, [emotion]);

  function handleEmotion(em) {
    // if (!pong) {
    //   console.log('no pong canvas')
    //   return
    // }
    console.log(Pong.running)

    // if(Pong.running === false) {
    //   Pong.running = true;
    //   window.requestAnimationFrame(() => Pong.loop());
    // }

    if (Pong.running) {
      if (em === 'happy')
        Pong.player.move = DIRECTION.UP;

      else if (em === 'surprised')
        Pong.player.move = DIRECTION.DOWN;

      else if (em === 'neutral')
        Pong.player.move = DIRECTION.IDLE;
    }
  }

  return <canvas id="pongCanvas"></canvas>;
};

export default PongExecutor;
