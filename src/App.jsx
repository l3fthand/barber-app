import React, {Component} from 'react';
import Landing from './Landing';
import Navigation from './Navigation';
import Admin from './Admin';
import AddBarberShop from './AddBarberShop';
import EditBarberShop from './EditBarberShop';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <div className="container">

        <Navigation/>

        <BrowserRouter basename='/'>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/addbarber' component={AddBarberShop}/>
            <Route path='/editbarber/:id' component={EditBarberShop}/>
          </Switch>
        </BrowserRouter>

        </div>
      </div>
    );
  }
}

export default App;