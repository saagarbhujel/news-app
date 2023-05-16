import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import NavBar from './Components/navbar/Navbar';
// import NewsComp from './Components/newsbody/NewsComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/category/Home';
import Business from './Components/category/Business'
import Entertainment from './Components/category/Entertainment'
import General from './Components/category/General'
import Health from './Components/category/Health'
import Science from "./Components/category/Science";
import Sports from "./Components/category/Sports";
import Technology from "./Components/category/Technology";
import LoadingBar from "react-top-loading-bar";



function App() {
  const [progress, setProgress] = useState(0)
  // let pageSize = 12;


  
  return (
    <BrowserRouter>
      <>
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <NavBar />

        <Routes>
          <Route
            exact
            path="/"
            index
            element={<Home setProgress={setProgress} />}
          ></Route>
          <Route
            path="/business"
            index
            element={<Business setProgress={setProgress} />}
          ></Route>
          <Route
            path="/entertainment"
            index
            element={<Entertainment setProgress={setProgress} />}
          ></Route>
          <Route
            path="/general"
            index
            element={<General setProgress={setProgress} />}
          ></Route>
          <Route
            path="/health"
            index
            element={<Health setProgress={setProgress} />}
          ></Route>
          <Route
            path="/science"
            index
            element={<Science setProgress={setProgress} />}
          ></Route>
          <Route
            path="/sports"
            index
            element={<Sports setProgress={setProgress} />}
          ></Route>
          <Route
            path="/technology"
            index
            element={<Technology setProgress={setProgress} />}
          ></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App
