import './App.css'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Food from './pages/Food'
import About from './pages/About'
import Events from './pages/CartPage'
import Contact from './pages/Contact'
import Footer from './components/footer/Footer'
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/menu' element = {<Food/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/calendar' element ={<Events/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;