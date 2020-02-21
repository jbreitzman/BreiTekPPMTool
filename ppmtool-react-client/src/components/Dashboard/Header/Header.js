import React, { Component } from "react";
import cx from "classnames";
import bs from "../../../assets/global-styles/bootstrap.css";

class Header extends Component {
  render() {
    return (
      <nav className={cx(bs.navbar, bs["navbar-expand-sm"], bs["navbar-dark"], bs["bg-primary"], bs["mb-4"])}>
        <div className={bs.container}>
          <a className={cx(bs["navbar-brand"])} href="Dashboard.html">
            Personal Project Management Tool
          </a>
          <button className={cx(bs["navbar-toggler"])} type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className={cx(bs["navbar-toggler-icon"])} />
          </button>

          <div className={cx(bs.collapse, bs["navbar-collapse"])} id="mobile-nav">
            <ul className={cx(bs["navbar-nav"], bs["mr-auto"])}>
              <li className={cx(bs["nav-item"])}>
                <a className={cx(bs["nav-link"])} href="/dashboard">
                  Dashboard
                </a>
              </li>
            </ul>

            <ul className={cx(bs["navbar-nav"], bs["ml-auto"])}>
              <li className={cx(bs["nav-item"])}>
                <a className={cx(bs["nav-link"])} href="register.html">
                  Sign Up
                </a>
              </li>
              <li className={cx(bs["nav-item"])}>
                <a className={cx(bs["nav-link"])} href="login.html">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
