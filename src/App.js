import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <Home/>
        </Route>
        <Route exact={true} path="/starred">
          <Starred/>
        </Route>
        <Route>
          <div>This is 404 page</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
