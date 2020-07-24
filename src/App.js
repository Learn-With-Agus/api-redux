import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers/";
import thunk from "redux-thunk";

import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
    return <Provider store={store}></Provider>;
}

export default App;
