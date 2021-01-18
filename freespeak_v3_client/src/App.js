
import { HashRouter, Route, Switch } from 'react-router-dom';
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
            <Route path='/'><PongPage emotion={result} setEmotion={setEmotion}  /></Route>
            <Route path='/game'>
            </Route>
          </Switch>
        </div>
    </HashRouter>
    ) ;
}
export default App;
