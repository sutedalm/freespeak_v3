import logo from "./logo.svg";
import "./App.css";
import VideoStream from "./components/VideoStream";
import PongExecutor from "./components/PongExecutor";

function App() {
  return (
    <div className="container">
      <div className="pong-executor">
        <PongExecutor className="pong-executor" />
      </div>

      <div className="video-stream">
        <VideoStream width={200} height={100} />
      </div>
    </div>
  );
}

export default App;
