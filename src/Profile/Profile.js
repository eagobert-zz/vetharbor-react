import React, { Component } from 'react'
import ProfilePhoto from '../Profile/ProfilePhoto'
// import Locations from './Locations'
//import Interests from './Interests'

class Profile extends Component {
    render(){

        return(
        <div className="profile">
        <ProfilePhoto />
        {/* <Locations />
        <Interests /> */}
        </div>)
        
    }
}

export default Profile