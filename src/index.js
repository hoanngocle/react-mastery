import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppHome from './AppHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' component={App}></Route>
                <Route path='/home' component={AppHome}></Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
