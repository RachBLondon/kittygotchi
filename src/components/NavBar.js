import React, { Component } from "react";
import Logo from "./../assets/Kittygotchi.png";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a
          className="navbar-brand"
          href="#"
          style={{ fontFamily: 'Galano', fontWeight: "900", fontSize: "6vh" }}
        >
          Kittygotchi
        </a>
        {/* <img src={Logo}/> */}
        {this.props.metaMask.installed && (
          <h1
            className="btn btn-outline-success my-2 my-sm-0 ml-auto"
            onClick={this.props.requestMetaMaskInfo}
          >
            Login with MetaMask
          </h1>
        )}
      </nav>
    );
  }
}
