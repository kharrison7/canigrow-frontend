import React, { Component } from 'react';
import '../styles/App.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="container header-navbar">
          <div className="row">
            <div className="col text-center">col</div>
            <div className="col text-center">col</div>
            <div className="col text-center">col</div>
            <div className="col text-center">col</div>
          </div>
        </div>
        <button className="header-hamburger"
        data-toggle="modal" data-target="#hamburger-menu">
          &#9776;
        </button>
        <div className="container">
          <div className="modal left fade in" id="hamburger-menu" tabIndex="-1" >
            <div className="modal-dialog">
              <div className="modal-content">
              <button type="button"
                className="close"
								data-dismiss="modal"
                aria-label="Close">
							<span aria-hidden="true">
                &times;
              </span>
						</button>
              <h4>Left Sidebar</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
