import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Feed from './Feed';
import Footer from './Footer';
import ToDo from './ToDo';
import { Routes , Route, BrowserRouter } from 'react-router-dom'

import React, { Component } from 'react'
import SignUp from './SignUp';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
        posts: [],
        user: [],
        username: 'logank',
        numposts: 0
    }
}

addpost = () => {
  this.setState({ numposts: this.state.numposts + 1 })
}
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/feed' element={<Feed posts1={this.state.numposts} />}></Route>
            <Route path='/todo' element={<ToDo/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
          </Routes>
          {this.state.username}
          <br></br>
          {this.state.numposts}
          <br></br>
          <button onClick={this.addpost}>Create a post</button>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}


