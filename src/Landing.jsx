import React, {Component} from 'react';
import Barbershop from './Barbershop';
import Navigation from './Navigation';
import './App.css';
import {api, server} from './API';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/fontawesome-free-solid';
import {connect} from 'react-redux';
import barberFactory from './redux/barberFactory';

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      startingPoint: '',
      filtered: [],
      display: null,
    }
  }

  handleSearch = () =>{
    var form = new FormData(this.searchForm);
    var distance = require('google-distance-matrix');
    var origins = [form.get("origin-input")];
    let barbershops = [...this.props.barbershops]

    for (let i=0; i<this.props.barbershops.length; i++) {
      var destination = this.props.barbershops[i]
      var destinations = [destination.location];
    
      distance.key('AIzaSyDknEtmtQzCjjFGOAJiHVFKcBegAsUBUKc')
      distance.matrix(origins, destinations, (err, distances)=>{
        if (!err){
            let km = (distances.rows[0].elements[0].distance.value)
            console.log(km)
            barbershops[i] = {...barbershops[i], distance:km,km:distances.rows[0].elements[0].distance.text}
          }
          var filtered = barbershops.filter((el)=>{
            return el.distance < 5000
          })
          this.setState({filtered})
      })
    }
    this.setState({display:"on"})
  }
  
  componentDidMount(){
    this.props.loadBarber()
    
  }
  
  render(){
    
    var {filtered} = this.state;
    return (
      <div className="App">
        <div className="container">

          <Navigation/>

          <div className="main">     
            <form ref={(el) => {this.searchForm = el}}>
              <div className="searchbar">
                <input  type="text" name="origin-input" placeholder="Enter your address..."></input>
                <div className="searchButton" onClick={this.handleSearch}><FontAwesomeIcon icon={faSearch}/></div>
              </div>
            </form>

            { this.state.display != null  ? 
                
              filtered.map((i) => {
                var props = {
                  ...i, 
                  key: i.id,
                }
                return <Barbershop {...props}/>
                
              }) 
             :
             null
            }

          </div>

        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    barbershops : state.barbershops,
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadBarber : () => {
      dispatch(barberFactory.load())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Landing);

