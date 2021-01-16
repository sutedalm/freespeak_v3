import logo from "./logo.svg";
import "./App.css";
import VideoStream from "./components/VideoStream";
import PongExecutor from "./components/PongExecutor";

function App() {
  return (
    <div>
      <PongExecutor />
      <VideoStream />
    </div>
  );
}

export default App;
