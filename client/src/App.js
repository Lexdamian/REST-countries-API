import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/home';
import SelectedCountry from "./components/selectedCountry/selectedCountry";
import Header from './components/header/header'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/country/:name" component={SelectedCountry} />
        </Switch>
      </div>
    </Router>
  );
}