import React, { Component } from "react";
import YellowCat from "./../assets/yellow-cat.svg";
import Toy from "./Toy";
import CatFood from "./CatFood";

export default class Game extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <Toy
          feedKitty={this.props.feedKitty}
          moveKittyLeft={this.props.moveKittyLeft}
          moveKittyRight={this.props.moveKittyRight}
        />
        <div className="kitty-cointainer">
          <img src={YellowCat} className="kitty" style={{marginRight: `${this.props.kittyPosition}vw`}}/>
          <CatFood
            feedingKitty={this.props.feedingKitty}
            
          />
        </div>
      </div>
    );
  }
}
