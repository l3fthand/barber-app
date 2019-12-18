import React, {Component} from 'react';


import './App.css';


class Landing extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <div class="container">
        <div class="nav">
            <img src="" alt="logo">
            <i class="far fa-user"></i>
        </div>
        <div class="main">     
            
                <form>
                <div class="form-group">
                    <input type="email" placeholder="search" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"><i class="fas fa-search"></i>
                </div>
                </form>
            

            <div class="barbershop">
                <div class="img">
                    <img src="" alt="barbershop">
                </div>
                <div class="info">
                    <h3>Malonley Baber</h3>
                    <div class="people">
                        <i class="far fa-user"></i>
                        <p>3</p>
                    </div>
                    <div class="people">
                        <i class="far fa-user"></i>
                        <p>5</p>
                    </div>
                    <div class="distance">
                        <p>800 m</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
      </div>
    );
  }
}


export default Landing;
