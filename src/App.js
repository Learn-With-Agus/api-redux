import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers/";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Register, Login, Home, Dog } from "./pages";

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    {" "}
                    <Route exact path="/">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/dog">
                        <Dog />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
