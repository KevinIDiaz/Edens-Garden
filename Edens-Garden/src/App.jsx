import './App.css'
import {Home} from './pages/Home'
import {About} from './pages/About'
import { Contact } from './pages/Contact'
import { Menu } from './pages/Menu'
import {Dine} from './pages/Dine'
import { References } from './pages/References'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Dine" element={<Dine/>}/>
          <Route path="/References" element={<References/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
