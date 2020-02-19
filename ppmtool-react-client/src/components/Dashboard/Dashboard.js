import React, { Component } from "react";
import Header from "./Header/Header";
import ProjectItem from "./Project/ProjectItem/ProjectItem";
import styles from "../../assets/global-styles/bootstrap.css";
import cx from "classnames";
import classes from "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1
          className={cx(
            classes.Dashboard,
            styles.alert,
            styles["alert-warning"]
          )}
        >
          Welcome to the Dashboard
        </h1>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    );
  }
}

export default Dashboard;
