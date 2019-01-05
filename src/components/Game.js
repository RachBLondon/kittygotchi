import React, { Component } from "react";
import YellowCat from "./../assets/yellow-cat.svg";
import Toy from "./Toy";
import CatFood from "./CatFood";

export default class Game extends Component {
  state = {
    feedingKitty: { started: false, shakeFood: true },
    kittyPosition: 0,
    gameDemoStats: {
      foodStock: 0,
      age: 0,
      plays: 0,
      hungry: true
    },
    warning : ""
  };

    // TODO switch setTimeouts to use call backs
  feedKitty = async () => {
    if(this.state.gameDemoStats.foodStock < 1){
      return this.setState({warning : "Buy more food"})
    }
    const newFoodLevel = Object.assign(this.state.gameDemoStats, {}, {foodStock : this.state.gameDemoStats.foodStock - 1})
    this.setState({ feedingKitty: { started: true } });
    setTimeout(
      () => this.setState({ feedingKitty: { pourFood: true, started: true }, gameDemoStats : newFoodLevel }),
      1000
    );
    const kittyHasEaten = Object.assign(this.state.gameDemoStats, {
      hungry: false
    });

    setTimeout(() => this.setState({ feedingKitty: {} }), 2500);
    await setTimeout(
      () => this.setState({ gameDemoStats: kittyHasEaten }),
      8000
    );
  };

    //TODO move down to game level
    moveKittyLeft = () => {
      this.setState({
        kittyPosition:
          this.state.kittyPosition < 5
            ? this.state.kittyPosition + 1
            : this.state.kittyPosition
      });
    };
  
    moveKittyRight = () => {
      this.setState({
        kittyPosition:
          this.state.kittyPosition > -9
            ? this.state.kittyPosition - 1
            : this.state.kittyPosition
      });
    };

    buyFood = () => {
      const withExtraFood = Object.assign(this.state.gameDemoStats, {
        foodStock: this.state.gameDemoStats.foodStock + 1
      });
      this.setState({ gameDemoStats: withExtraFood });
    };
  

  render() {
    return (
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            zIndex: "1",
            margin: "2rem 1rem",
            fontFamily: "VT323",
            backgroundColor: "white",
            padding: "1rem",
            opacity: "0.7",
            borderRadius: ".25rem",
            color: "black"
          }}
        >
          <h3>
            Hungry :{" "}
            {this.state.gameDemoStats.hungry ? "Yes! 😾" : "I'm full 😸"}{" "}
          </h3>

          <h3>Food stock: {this.state.gameDemoStats.foodStock}</h3>
          <h3>Age: {this.state.gameDemoStats.age}</h3>
          <h3>Days to grow up : 10</h3>
          <h3>Kitty Toys: nones</h3>
          {/* <h3>Plays: {this.state.gameDemoStats.plays}</h3> */}
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: "1",
            right: "0",
            margin: "2vh"
          }}
        >
          <button onClick={this.buyFood} className="btn btn-outline-success">Buy food</button>
        </div>
        {this.state.warning && <h2 style={{position: 'absolute', zIndex : 2, color : 'red'}}>{this.state.warning}</h2>}
        <Toy
          feedKitty={this.feedKitty}
          moveKittyLeft={this.moveKittyLeft}
          moveKittyRight={this.moveKittyRight}
        />
        <div className="kitty-cointainer">
          <img
            src={YellowCat}
            className="kitty"
            style={{ marginRight: `${this.state.kittyPosition}vw` }}
          />
          <CatFood feedingKitty={this.state.feedingKitty} />
        </div>
      </div>
    );
  }
}
