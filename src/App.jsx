import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";




import './App.css'
import NavBar from './Components/navbar/Navbar';
import NewsComp from './Components/newsbody/NewsComp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <NewsComp/>
    </>
  );
}

export default App
