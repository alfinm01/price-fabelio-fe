import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import './App.css';
import Detail from "./Components/Detail"
import Header from "./Components/Header"
import ItemList from "./Components/ItemList"
import Submission from "./Components/Submission"

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
  )
}

export default App
