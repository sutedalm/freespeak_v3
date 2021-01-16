import React, { useEffect, useState } from "react";
import Pong, { DIRECTION } from "./pong_canvas";
import VideoStream from './faceapi';



const EmotionsPong = () => {
    useEffect(() => {
      Pong.initialize();
    }, []);

    return <canvas id="dotdotdot"></canvas>;
  };

  export default EmotionsPong;