import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import App from 'containers/App';
import Test from 'containers/Test';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/first">
          <App />
        </Route>
        <Route path="/first/second">
          <Test />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}