import React, { Component } from 'react'
import ProfilePhoto from '../Profile/ProfilePhoto'
import Locations from './Locations'
import Interests from './Interests'
import '../Profile/Profile.css'
import { Grid, Typography } from '@material-ui/core'

class Profile extends Component {
    render(){

        return(
  
                <Grid item className="profile" xs={2}>
                    <Typography variant="subheading">Profile</Typography>
                    <ProfilePhoto />
                    <Locations />
                    <Interests />
                </Grid>
            
       )
        
    }
}

export default Profile