import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
//import Profile from '../Profile/Profile'
//import Events from '../Events/EventList'
//import Search from '../Search/Search'

class UserView extends Component{
    
    render(){
        return(
        <div>
            <Navbar activeUser={this.props.activeUser} showView={this.props.showView} currentState={this.props.currentState}/>
        </div>)
    }
}

export default UserView