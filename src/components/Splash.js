import React, { Component } from "react";
import KittyGotchi from "./../assets/black-kittygotchi.png";
import YellowCat from "./../assets/yellow-cat.svg";
import PinkBackground from './../assets/background-pink.png';
import back9 from './../assets/9.png';
import back10 from './../assets/10.png';
import Toy from './Toy'

export default class Splash extends Component {
  render() {
    return (
      <div style={{position: "relative"}}>
        {/* <img src={back9} /> */}
        <Toy/>
        <div className="kitty-cointainer">
        <img
          src={YellowCat}
          className="kitty"
        />
        </div>
      </div>
    );
  }
}
