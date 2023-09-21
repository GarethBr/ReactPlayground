import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

//importing pages
import Dashboard from "./Pages/Dashboard";
import TweetsPage from "./Pages/TweetsPage";
import MoviePage from "./Pages/ImdbPage";
import MusicPage from "./Pages/MusicPage";
import FormPage from './Pages/FormPage';
import RealCalc from './Pages/RealCalc';



/*
  React app. Provides navigation across pages via react-router-dom
*/
function App() {
  return (
    <Router>    
      <Routes>
          <Route path="/FormPage" element= {<FormPage/>}/>
          <Route path="/MusicPage" element={<MusicPage/>} />          
          <Route path="/TweetsPage" element ={<TweetsPage/>}/>
          <Route path="/RealCalc" element ={<RealCalc/>}/>
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/MoviePage" element={<MoviePage/>} />          
      </Routes>
  </Router>
  );
}

export default App;
