import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";




import './App.css'
import NavBar from './Components/navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    </>
  );
}

export default App
