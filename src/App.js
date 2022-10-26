import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {HomePage} from './pages/home-page';
import {Header} from './components/header';
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
