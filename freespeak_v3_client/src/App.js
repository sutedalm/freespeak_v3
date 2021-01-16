
import { HashRouter, Route, Switch } from 'react-router-dom';
import VideoStream from "./pages/components/VideoStream";
import PongExecutor from "./pages/components/PongExecutor2";
import StartPage from './pages/StartPage.js';
import {useState} from "react"

function App() {
  // let result = "neutral"
  const [result, setResult] = useState("neutral");

  const setEmotion = (emotion) => {
    setResult(Object.keys(emotion).reduce((a, b) => emotion[a] > emotion[b] ? a : b))
    // result = Object.keys(emotion).reduce((a, b) => emotion[a] > emotion[b] ? a : b);
    // console.log(result)
  }
    return (
        <HashRouter>
        <div style={{height:'100%'}}>
          <Switch>
            <Route path='/' exact render={(props) => <StartPage {...props} />}/>
            <Route path='/game'>
            <div className="container">
                <div className="pong-executor">
                    <PongExecutor className="pong-executor" emotion={result}/>
                </div>

                <div className="video-stream">
                    <VideoStream width={200} height={100} setEmotion={setEmotion} />
                </div>
            </div>
            </Route>
          </Switch>
        </div>
    </HashRouter>
    ) ;
}
export default App;
