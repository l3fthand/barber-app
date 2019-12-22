import React, {Component} from 'react';
import Barbershop from './Barbershop';
import Navigation from './Navigation';
import './App.css';
import {withRouter} from "react-router-dom";
import {api, server} from './API';
import Button from 'react-bootstrap/Button';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      barbershops: [],
      redirect: true,
    }
  }
 
  // handleSearch = () =>{
  //   var distance = require('google-distance-matrix');

  //   var origins = ['San Francisco CA'];
  //   var destinations = ['New York NY', '41.8337329,-87.7321554'];
  
  //   distance.matrix(origins, destinations, function (err, distances) {
  //     if (!err)
  //         console.log(distances);
  // })


  // }

  navigatePage(){
    let {history} = this.props;
    history.push({
      pathname: '/addbarber',
    })
  }

  getShops = () => {
    api.getShops()
    .then(res => {
      this.setState({barbershops: res.data})
    })
  }

  componentDidMount(){
    this.getShops()
  }

  render(){
    var {barbershops,redirect} = this.state;
    return (
      <div className="App">
        <div className="container">

          <Navigation/>

          <div className="main">     
            {/* <form>
              <div className="searchbar">
                <input type="text" name="search" placeholder="search..."></input>
              </div>
            </form> */}
              <Button onClick={this.navigatePage.bind(this)} className="barbershopAdd" variant="danger" size="lg" block>Add New Barber</Button>

            {
              barbershops.map((i) => {
                var props = {
                  ...i,
                  key: i.id,
                }
                return <Barbershop {...props}/>
              })
            }

          </div>

        </div>
      </div>
    );
  }
}

export default Landing;
