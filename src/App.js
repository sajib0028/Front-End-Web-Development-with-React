import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Component } from 'react';
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
 
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
}
}

export default App;
