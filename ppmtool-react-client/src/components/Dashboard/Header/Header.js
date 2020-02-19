import React, { Component } from "react";
import classes from "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <h1>Navbar</h1>
      </div>
    );
  }
}

export default Header;
