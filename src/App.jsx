import React from "react";
import IndexPage from "./IndexPage";
import "./assets/scss/app.scss";
// import NavJS from "./components/NavJS";
// import FooterComponent from "./components/FooterComponent";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




export default function App() {

  return (
    <Router>
      <div className="app w-full ubuntu">
        <Switch>
          <Route path='/skidka-ogon' exact><IndexPage page='main' /></Route>
          <Route path='/skidka-ogon/sponsors' exact><IndexPage page='sponsors' /></Route>
          <Route path='/skidka-ogon/map' exact><IndexPage page='map' /></Route>
        </Switch>
      </div>
    </Router>
  );
}
reportWebVitals();
