import logo from './logo.svg';
import './App.css';

function App() {

  let post = 'post name'


  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>
        <h4 style={{color : 'navy', fontSize : '30px'}}>{ post }</h4>
    </div>
  );
}

export default App;
