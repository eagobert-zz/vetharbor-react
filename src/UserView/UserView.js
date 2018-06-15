import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Profile from '../Profile/Profile'
import Events from '../Events/EventList'
import Search from '../Search/Search'

class UserView extends Component{
    
    render(){
        return(
        <div>
            <Navbar activeUser={this.props.activeUser} showView={this.props.showView} setActiveUser={this.setActiveUser} currentState={this.props.currentState}/>
            <Profile activeUser={this.props.activeUser}/>
            <Events />
            <Search />
        </div>)
    }
}

export default UserView