import './App.css';
import Counter from './Counter';
import Container from './Container';

function App() {
  const number = 5;

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    num: number,
  }

 
  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <h1>안녕 리액트</h1>
        <Counter {...counterProps} />
        </header>
      </Container>
      <Container>
        <header className="App-header">
          <h1>안녕 리액트</h1>
        <Counter {...counterProps} />
        </header>
      </Container>
      <Container>
        <header className="App-header">
          <h1>안녕 리액트</h1>
        <Counter {...counterProps} />
        </header>
      </Container>
    </div>
  );
}

export default App;
