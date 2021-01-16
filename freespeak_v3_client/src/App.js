
import { HashRouter, Route, Switch } from 'react-router-dom';
import VideoStream from "./pages/components/VideoStream";
import PongExecutor from "./pages/components/PongExecutor";
import StartPage from './pages/StartPage.js';

function App() {
    return (
        <HashRouter>
        <div style={{height:'100%'}}>
          <Switch>
            <Route path='/' exact render={(props) => <StartPage {...props} />}/>
            <Route path='/game'>
            <div className="container">
                <div className="pong-executor">
                    <PongExecutor className="pong-executor" />
                </div>

                <div className="video-stream">
                    <VideoStream width={200} height={100} />
                </div>
            </div>
            </Route>
          </Switch>  
        </div>
    </HashRouter> 
    ) ;
  S
}

export default App;
