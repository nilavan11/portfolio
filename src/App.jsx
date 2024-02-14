import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'; 
import Header from './sections/Header';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Project from './sections/Project';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/experience" element={<Experience/>} />
      <Route exact path="/project" element={<Project/>} />
      <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      <div class="copyright">
        &copy; 2024 NILAVAN S
    </div>
    </Router>
    </>
  )
}

export default App
