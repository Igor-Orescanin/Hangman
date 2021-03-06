import './App.css';
import Win from './Win';
import Loggin from "./Loggin";
import Game from "./Game";
import Lose from "./Lose";

// to route to the pages
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router> {/* // to define the routes in the browser */}
        <div className="App">
         <Route path='/' exact component={Home}></Route>
         <Route path='/game' component={Game}></Route> 
         <Route path='/win' component={Win}></Route> 
         <Route path='/lose' component={Lose}></Route> 

        </div>
    </Router>
 
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1> {/* later that will be the home page  */}
  </div>
)



export default App;
