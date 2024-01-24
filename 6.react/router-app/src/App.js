import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header"></header>
      <nav className='menu'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' exact element ={<Home />} />
        <Route path='/about' element ={<About />} />
        <Route path='/contact' element ={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
