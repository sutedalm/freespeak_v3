import React, { useEffect, useState } from "react";

import * as faceapi from "face-api.js";

function analyze(video) {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  }, 100);
}
const streamCamVideo = () => {
  // input constraints
  var constraints = { audio: true, video: { width: 1280, height: 720 } };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((mediaStream) => {
      var video = document.getElementById("video");

      video.srcObject = mediaStream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
      video.addEventListener("play", analyze(video));
      return video;
    })
    .catch(function (err) {
      console.log(err.name + ": " + err.message);
    }); // always check for errors at the end.
};

async function loadModels() {
  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    faceapi.nets.faceExpressionNet.loadFromUri("/models"),
  ]);
}

const VideoStream = () => {
  let video;

  useEffect(() => {
    console.log("Ich hab geladen");

    // video = document.getElementById("video");
    loadModels().then(() => {
      const video = streamCamVideo();
      analyze(video);
    });
  }, []);

  return (
    <div>
      <video id="video" width="720" height="560" autoPlay muted></video>
    </div>
  );
};

export default VideoStream;
