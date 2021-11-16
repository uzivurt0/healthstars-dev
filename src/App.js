import "./App.css";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./Pages/About";
import Artikel1 from "./Pages/Artikel/Artikel1";
import Artikel2 from "./Pages/Artikel/Artikel2";
import Artikel3 from "./Pages/Artikel/Artikel3";
import Artikel4 from "./Pages/Artikel/Artikel4";

function App() {
  return (
    <Router>
      <div className="App main-container">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/artikel1">
            <Artikel1 />
          </Route>
          <Route path="/artikel2">
            <Artikel2 />
          </Route>
          <Route path="/artikel3">
            <Artikel3 />
          </Route>
          <Route path="/artikel4">
            <Artikel4 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
