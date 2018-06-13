//Purpose:  Component to hold all app components

import React, { Component } from 'react';
import Login from './Auth/Login'
import Register from './Auth/Register'
import UserView from './UserView/UserView'
import './App.css';

class App extends Component {

  constructor(props) {

    super(props)

    //set initial state of app 
    this.state = {
      username: "",
      city: "",
      state: "",
      email: "",
      password: "",
      currentView: "login",
      activeUser: localStorage.getItem("ActiveUser")
    }

  }

  //function to set active user
  setActiveUser = (val) => {
    if (val) {
      localStorage.setItem("ActiveUser", val)
    } else {
      localStorage.removeItem("ActiveUser")
    }

    //sets new state if value
    this.setState({
      activeUser: val
    })
  }

  //function to create trigger event for view change
  showView = function (e) {
    let view = null

    // Click event triggered switching view
    if (e.hasOwnProperty("target")) {
      view = e.target.id.split("__")[1]

      // View switch manually triggered by passing in string
    } else {
      view = e
    }

    // If user clicked logout in nav, empty local storage and update activeUser state
    if (view === "logout") {
      this.setActiveUser(null)
    }

    // Update state to render correct view
    this.setState({
      currentView: view
    })

  }.bind(this)

  //function to set new view
  View = () => {

    switch (this.state.currentView) {

      case "logout":
        return <Login showView={this.showView} setActiveUser={this.setActiveUser} currentState={this.state}/>

      case "login":
        return <Login showView={this.showView} setActiveUser={this.setActiveUser} currentState={this.state}/>

      case "register":
        return <Register showView={this.showView} setActiveUser={this.setActiveUser} currentState={this.state}/>

      case "home":
      default: return <UserView activeUser={this.state.activeUser} currentState={this.state}/>
    }
   
  }

  render() {
    return (
      <div className="App">
      
        {this.View()}

      </div>
    );
  }
}

export default App;
