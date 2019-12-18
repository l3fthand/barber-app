import React, {Component} from 'react';
import Landing from './Landing';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Landing/>
      </div>
    );
  }
}

export default App;
