import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.scss';
import {Header} from './components/Header';
import { Home } from "./pages/Home";
import { Collections } from "./pages/Collections";
import { Gallery } from "./pages/Gallery";



function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/collections" element={<Collections/>}/>
          <Route path="/collections/:id" element={<Gallery/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>

    
    </div>
  );
}

export default App;
