
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
                <PongExecutor />
                <VideoStream />
            </Route>
          </Switch>  
        </div>
    </HashRouter> 
    ) ;
  
}

export default App;
