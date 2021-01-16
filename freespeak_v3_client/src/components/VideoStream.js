import "../styles/VideoStream.css";
import React, { useEffect, useState } from "react";

import * as faceapi from "face-api.js";

const VideoStream = ({ width, height }) => {
  function analyze() {
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    // const canvas = faceapi.createCanvasFromMedia(video);
    const displaySize = { width: width, height: height };
    faceapi.matchDimensions(canvas, displaySize);
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext("2d").clearRect(0, 0, width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
    }, 100);
  }

  const streamCamVideo = () => {
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    // input constraints
    var constraints = { audio: true, video: { width: width, height: height } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  };

  async function loadModels() {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68TinyNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]);
    // const MODEL_URL = "/models";
    // await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    // await faceapi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_URL);
    // await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    console.log("loaded models");
  }

  useEffect(() => {
    console.log("Ich hab geladen");
    streamCamVideo();

    // video = document.getElementById("video");
    loadModels().then(analyze());
  }, []);

  return (
    <div className="video-container" width={width} height={height}>
      <canvas
        className="video-canvas"
        width={width}
        height={height}
        id="canvas"
      ></canvas>
      <video
        className="video-output"
        width={width}
        height={height}
        id="video"
        autoPlay
        muted
      ></video>
    </div>
  );
};

export default VideoStream;
