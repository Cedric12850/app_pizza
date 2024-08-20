import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact';
import CGV from './components/cgv/CGV';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Contact />
      <CGV />

    </div>
  )
}

export default App
