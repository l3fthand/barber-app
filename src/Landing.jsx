import React, {Component} from 'react';
import Barbershop from './Barbershop';
import './App.css';
import {api, server} from './API';



class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      // startingPoint: '',
      barbershops: []
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

    

    var {barbershops} = this.state;
    return (
      <div className="App">
        <div className="container">

          <div className="nav">
            <img src="" alt="logo"/>
            <i className="far fa-user"></i>
          </div>

          <div className="main">     
            <form>
              <div className="searchbar">
                <input type="text" name="search" placeholder="search..."></input>
              </div>
            </form>

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
