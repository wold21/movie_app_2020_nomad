// 1. npm install axios
// 라우터를 쓴다면 여기에 임포트 할 필요 없음.
// import axios from 'axios';

import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Detail from "./routes/Detail";
import "./App.css";


function App(){
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />
    {/* <Route path="/home">
      <h1>Home</h1>
    </Route>
    <Route path="/home/introduction">
      <h1>Introduction</h1>
    </Route>
    <Route path="/about">
      <h1>About</h1>
    </Route> */}
  </HashRouter>
  );
}

export default App;