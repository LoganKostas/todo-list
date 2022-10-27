import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="/navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/feed">Feed</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/todo">ToDo List</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/signup">SignUp</Link>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
      </div>
    )
  }
}
