// import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

const App =()=>{

  let pageresize = 5

  const [progress, setProgress] = useState(0);
 

  
    return <div>
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Navbar/>
      <Routes>

           <Route end path="/"  element={<News setProgress={setProgress} pagesize={pageresize} country="in" category="general"/>}/>
           <Route end path="/business"  element={<News setProgress={setProgress} key="business" pagesize={pageresize} country="in" category="business"/>}/>
           <Route end path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pagesize={pageresize} country="in"      category="entertainment"/>}/>
           <Route end path="/general"  element={<News setProgress={setProgress} key="general" pagesize={pageresize} country="in" category="general"/>}/>
           <Route end path="/health"  element={<News setProgress={setProgress} key="health" pagesize={pageresize} country="in" category="health"/>}/>
           <Route end path="/science"  element={<News setProgress={setProgress} key="science" pagesize={pageresize} country="in" category="science"/>}/>
           <Route end path="/sports"  element={<News setProgress={setProgress} key="sports" pagesize={pageresize} country="in" category="sports"/>}/>
           <Route end path="/technology"  element={<News setProgress={setProgress} key="technology" pagesize={pageresize} country="in" category="technology"/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>;
  
}

export default App;
