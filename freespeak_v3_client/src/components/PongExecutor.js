import React, { useEffect, useState } from "react";
import Pong, { DIRECTION } from "./pong_canvas";

const PongExecutor = () => {
  useEffect(() => {
    Pong.initialize();
  }, []);

  return <canvas id="pongCanvas"></canvas>;
};

export default PongExecutor;
