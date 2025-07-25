import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './pages/Layout';
import Minesweeper from './pages/Minesweeper';
import Sls from './pages/Sls';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/minesweeper" element={<Minesweeper />} />
        <Route path="/sls" element={<Sls />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


