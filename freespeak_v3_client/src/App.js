
import { HashRouter, Route, Switch } from 'react-router-dom';
import GamesLibrary from './pages/GamesLibrary.js';
import PongPage from './pages/PongPage.js';
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
            <Route path='/' exact render={(props) => <GamesLibrary {...props} />}/>
            <Route path='/emopong' exact render={(props) => <PongPage emotion={result} setEmotion={setEmotion} {...props} />}/>
          </Switch>
        </div>
    </HashRouter>
    ) ;
}
export default App;
