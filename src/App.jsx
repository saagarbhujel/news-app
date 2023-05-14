import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import NavBar from './Components/navbar/Navbar';
import NewsComp from './Components/newsbody/NewsComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/category/Home';
import Business from './Components/category/Business'
import Entertainment from './Components/category/Entertainment'
import General from './Components/category/General'
import Health from './Components/category/Health'
import Science from "./Components/category/Science";
import Sports from "./Components/category/Sports";
import Technology from "./Components/category/Technology";




function App() {
  const [count, setCount] = useState(0)
  let pageSize = 12;
  return (
      <BrowserRouter>
    <>
      <NavBar />

        <Routes>
          
            <Route exact path="/" index element={<Home />}></Route>
            <Route path="/business" index element={<Business />}></Route>
            <Route
              path="/entertainment"
              index
              element={<Entertainment />}
            ></Route>
            <Route path="/general" index element={<General />}></Route>
            <Route path="/health" index element={<Health />}></Route>
            <Route path="/science" index element={<Science />}></Route>
            <Route path="/sports" index element={<Sports />}></Route>
            <Route path="/technology" index element={<Technology />}></Route>
         
        </Routes>
    </>
      </BrowserRouter>
  );
}

export default App
