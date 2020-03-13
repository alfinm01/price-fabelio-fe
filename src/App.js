import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Detail from './Components/Detail.js';
import Header from './Components/Header.js';
import ItemList from './Components/ItemList.js';
import Submission from './Components/Submission.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/submission">
            <Submission />
          </Route>
          <Route path="/item-list">
            <ItemList />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
