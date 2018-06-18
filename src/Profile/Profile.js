import React, { Component } from 'react'
import ProfilePhoto from '../Profile/ProfilePhoto'
import Locations from './Locations'
import Interests from './Interests'
import '../Profile/Profile.css'

class Profile extends Component {
    render(){

        return(
        <div className="profile">
        <h3>Profile</h3>
        <ProfilePhoto />
        <Locations />
        <Interests />
        </div>)
        
    }
}

export default Profile