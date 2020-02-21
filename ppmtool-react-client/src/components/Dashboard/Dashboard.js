import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem/ProjectItem";
import bs from "../../assets/global-styles/bootstrap.css";
import cx from "classnames";

class Dashboard extends Component {
  render() {
    return (
      <div className={bs.projects}>
        <div className={bs.container}>
          <div className={bs.row}>
            <div className={cx(bs["col-md-12"])}>
              <h1 className={cx(bs["display-4"], bs["text-center"])}>Projects</h1>
              <br />
              <a href="ProjectForm.html" className={cx(bs.btn, bs["btn-lg"], bs["btn-info"])}>
                Create a Project
              </a>
              <br />
              <hr />

              <ProjectItem />
              <ProjectItem />
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
