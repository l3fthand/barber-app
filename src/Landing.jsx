import React, {Component} from 'react';
import Barbershop from './Barbershop';
import './App.css';
import {api, server} from './API';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      startingPoint: '',
      barbershops: []
    }
  }
 
 
  handleSearch = () =>{
    var form = new FormData(this.searchForm);
    var distance = require('google-distance-matrix');
    var origins = [form.get("origin-input")];

    for (let i= 0; i < this.state.barbershops.length; i++) {
      var destination = this.state.barbershops[i]
      var destinations = [destination.location];
    
      distance.key('AIzaSyDknEtmtQzCjjFGOAJiHVFKcBegAsUBUKc')
      distance.matrix(origins, destinations, (err, distances)=>{
        if (!err){
            let km = distances.rows[0].elements[0].distance.text
            var barbershops = [...this.state.barbershops]
            barbershops[i] = {...barbershops[i], distance:km}
            this.setState({barbershops})
          }
      })
    }
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
    var {barbershops} = this.state;
    return (
      <div className="App">
        <div className="container">

          <div className="nav">
            <img src="" alt="logo"/>
            <i className="far fa-user"></i>
          </div>

          <div className="main">     
            <form ref={(el) => {this.searchForm = el}}>
              <div className="searchbar" onBlur={this.handleSearch}>
                <input type="text" name="origin-input" placeholder="search..."></input>
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

