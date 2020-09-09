import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ProtectedRoute } from "./protected.route";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Router>
      <ProtectedRoute exact path="/" component={Dashboard} />
      <Route path="/login" component={LoginForm} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
