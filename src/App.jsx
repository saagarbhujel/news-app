import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import NavBar from './Components/navbar/Navbar';
import NewsComp from './Components/newsbody/NewsComp';

function App() {
  const [count, setCount] = useState(0)
  let pageSize = 12;
  return (
    <>
      <NavBar />
      <NewsComp
        pageSize={pageSize}
        key="home"
        country="us"
        category="general"
      />
    </>
  );
}

export default App
