import React from "react";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import Landing from "./Landing";
import Leaderbord from "./Leaderboard";
import { Quizlet } from "./Quizlet";
import Result from "./Result";
import { Header } from "../components/common";

import { theme, styles } from "../theme";

import { rootReducer } from "../reducers";
import rootSaga from "../sagas";

import { setResultToDataBase } from "../dataBase/allResults";
import { ThemeProvider } from "@material-ui/core";

function App() {
  const sagaMiddleware: any = createSagaMiddleware();
  const dynamicCompose: any =
    process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

  const store: any = createStore(
    rootReducer,
    dynamicCompose(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  setResultToDataBase();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/quizlet" component={Quizlet} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/leaderboard" component={Leaderbord} />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
