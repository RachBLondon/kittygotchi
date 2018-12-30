import React, { Component } from "react";
import CatFoodImg from "./../assets/catfood.png";

export default class CatFood extends Component {
  render() {
    return (
      <div>
        <img
          className="catfood"
          src={CatFoodImg}
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
            <div
              className="drop"
              style={
                this.props.feedingKitty.pourFood ? { display: "block" } : {}
              }
            />
            <div
              className="drop"
              style={
                this.props.feedingKitty.pourFood ? { display: "block" } : {}
              }
            />
            <div
              className="drop"
              style={
                this.props.feedingKitty.pourFood ? { display: "block" } : {}
              }
            />
            <div
              className="drop"
              style={
                this.props.feedingKitty.pourFood ? { display: "block" } : {}
              }
            />
            <div
              className="drop"
              style={
                this.props.feedingKitty.pourFood ? { display: "block" } : {}
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
