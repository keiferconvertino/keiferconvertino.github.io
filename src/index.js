import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Photos from './components/Photos';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, HashRouter} from 'react-router-dom'
import Experience from './components/Experience';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path = '/' element = {<App />}>
        </Route>
        <Route path = '/photos' element = {<Photos />}></Route>
        <Route path = '/experience' element = {<Experience />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
