import React, {Component} from 'react';
import Landing from './Landing';
import Admin from './Admin';
import AddBarberShop from './AddBarberShop';
import './App.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (
      <div className="App">
        <BrowserRouter basename='/'>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/addbarber' component={AddBarberShop}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;