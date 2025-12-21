import './App.css'
import Home from './Home'
import Dashboard from './Dashboard'
import { Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar';

function App() {
  return (
    <>
       <Navbar/>
    <Routes>
   
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App
