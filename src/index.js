import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

import Introduce from './components/introduce';
import AudioBook from './components/audioBook';
import TruyenAudio from './components/truyenAudio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/Home" element={<Introduce />} />
      <Route path="/AudioBook" element={<AudioBook />} />
      <Route path="/TruyenAudio" element={<TruyenAudio />} />
    </Route>
  </Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
