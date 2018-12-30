import React, { Component } from "react";
import KittyGotchi from "./../assets/black-kittygotchi.png";
import YellowCat from "./../assets/yellow-cat.svg";
import PinkBackground from "./../assets/background-pink.png";
import back9 from "./../assets/9.png";
import back10 from "./../assets/10.png";
import Toy from "./Toy";
import CatFood from "./../assets/catfood.png";

export default class Splash extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <Toy feedKitty={this.props.feedKitty} />
        <div className="kitty-cointainer">
          <img src={YellowCat} className="kitty" />
          <img
            className="catfood"
            src={CatFood}
            style={
              this.props.feedingKitty.started
                ? {
                    opacity: "1",
                    transform: "rotate(-90deg)"
                  }
                : {}
            }
          />

          <div className="wrapper">
            <div className="rain">
              <div className="drop" style={this.props.feedingKitty.pourFood ? {display : 'block'}:{}}/>
              <div className="drop" style={this.props.feedingKitty.pourFood ? {display : 'block'}:{}}/>
              <div className="drop" style={this.props.feedingKitty.pourFood ? {display : 'block'}:{}}/>
              <div className="drop" style={this.props.feedingKitty.pourFood ? {display : 'block'}:{}}/>
              <div className="drop" style={this.props.feedingKitty.pourFood ? {display : 'block'}:{}}/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
