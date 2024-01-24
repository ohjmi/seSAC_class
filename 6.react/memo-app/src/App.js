import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MemoApp from './MemoApp';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to = '/'>홈</Link>
            </li>
            <li>
              <Link to = '/memo'>메모앱</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <Routes>
          <Route path='/' exact element ={<div><h1>홈페이지</h1></div>} />
          <Route path='/memo' element ={<MemoApp />} />
        </Routes>
      </section>
    </div>
    </Router>
  );
}

export default App;
