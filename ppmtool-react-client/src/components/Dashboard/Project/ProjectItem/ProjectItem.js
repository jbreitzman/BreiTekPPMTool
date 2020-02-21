import React, { Component } from "react";
import classes from "./ProjectItem.css";
import bs from "../../../../assets/global-styles/bootstrap.css";
import cx from "classnames";

class ProjectItem extends Component {
  render() {
    return (
      <div className={bs.container}>
        <div className={cx(bs.card, bs["card-body"], bs["bg-light"], bs["mb-3"])}>
          <div className={bs.row}>
            <div className={bs["col-2"]}>
              <span className={bs["mx-auto"]}>REACT</span>
            </div>
            <div className={cx(bs["col-lg-6"], bs["col-md-4"], bs["col-8"])}>
              <h3>Spring / React Project</h3>
              <p>Project to create a Kanban Board with Spring Boot and React</p>
            </div>
            <div className={cx(bs["col-md-4"], bs["d-none"], bs["d-lg-block"])}>
              <ul className={bs["list-group"]}>
                <a href="">
                  <li className={cx(bs["list-group-item"], classes.board)}>
                    <i className={cx(classes.fa, bs["fa-flag-checkered"], bs["pr-1"])}>Project Board</i>
                  </li>
                </a>
                <a href="">
                  <li className={cx(bs["list-group-item"], classes.update)}>
                    <i className={cx(classes.fa, classes["fa-edit"], bs["pr-1"])}>Update Project Info</i>
                  </li>
                </a>
                <a href="">
                  <li className={cx(bs["list-group-item"], classes.delete)}>
                    <i className={cx(classes.fa, classes["fa-minus-circle"], bs["pr-1"])}>Delete Project</i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
