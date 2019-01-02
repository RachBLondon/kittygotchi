import React, { Component } from "react";
import YellowCat from "./../assets/yellow-cat.svg";
import Toy from "./Toy";
import CatFood from "./CatFood";

export default class Game extends Component {
  render() {
    return (
      <div style={{ position: "relative", color : "#484848" }}>
        <div style={{ position: "absolute", zIndex: "1", margin: "2rem 1rem", fontFamily : 'VT323' }}>
        <h3>Hungry : {this.props.gameDemoStats.hungry ? 'Yes! 😾' : "I'm full 😸"} </h3>

          <h3>Food stock: {this.props.gameDemoStats.foodStock}</h3>
          <h3>Age: {this.props.gameDemoStats.age}</h3>
          {/* <h3>Plays: {this.props.gameDemoStats.plays}</h3> */}
        </div>
        <div style={{ position: "absolute", zIndex: "1", right: "0", margin: "2vh"}}>
          <button className="btn btn-outline-success">Buy food</button>
        </div>
        <Toy
          feedKitty={this.props.feedKitty}
          moveKittyLeft={this.props.moveKittyLeft}
          moveKittyRight={this.props.moveKittyRight}
        />
        <div className="kitty-cointainer">
          <img
            src={YellowCat}
            className="kitty"
            style={{ marginRight: `${this.props.kittyPosition}vw` }}
          />
          <CatFood feedingKitty={this.props.feedingKitty} />
        </div>
      </div>
    );
  }
}
