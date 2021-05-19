import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Main} from "./pages/Main";
import {NavigationNavbar} from "./components/navigation/Navbar";

const CustomRoute = () =>
    <Router>
        <NavigationNavbar/>
        <Switch>
            <Route path="/" component={Main}/>
        </Switch>
    </Router>


ReactDOM.render(
    <React.StrictMode>
        <CustomRoute/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
