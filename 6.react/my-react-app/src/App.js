import './App.css';
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'

function App() {
  let name = 'sesac';

  const style = {
    h2: {
      color: 'yellowgreen',
    },
    my_text: {
      color: 'skyblue',
    }
  }

  return (
    <div className="App">
      <MyHeader />
      <header className='App-header'>
        <h1>헬로우, 리액트 {name}</h1>
      </header>
      <h2 style={style.h2}>헤더2</h2>
      <p style={style.my_text}>본문 내용... welcome to React-class</p>
      <MyFooter/>
    </div>
  );
}

export default App;
