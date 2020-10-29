import './App.css'
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Header from './Header.js';
import DeveloperLogin from './DeveloperLogin.js';
import Home from './Home.js';
function App() {
  return (
    <Router>
      <div className="App">
       <Switch>
          {
          /* navbar, 5-6 images , all details in table form , affiliate links,latest news section , comments , 
          developer login ,add product review , delete product review , comparisons , SEO , mobile friendly , searchbar  */
          }
          <Route path = '/DeveloperLogin'>
            <Header />
            <DeveloperLogin />
          </Route>
          <Route path = '/homeafterlogin'>
            <DeveloperLogin />
          </Route>
          <Route path = '/'>
            <Header />
            <Home />
          </Route>
       </Switch>

    </div>
    </Router>
  );
}

export default App
