import React, { Component } from 'react'
import '../Navbar/Navbar.css'
import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core'

class Navbar extends Component {

        //function to handle logout
        handleLogout = function(e) {
            e.preventDefault()
            this.props.showView("logout")
            localStorage.removeItem("ActiveUser")
        }.bind(this)

        handleEditProfile = function(e) {
            e.preventDefault()
            this.props.showView("profile")
        }.bind(this)

    render(){
        const ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"))
        const UserName = ActiveUser.username

        return(
        <div className="navbar-container">
            <AppBar>

                <Toolbar>
                    <Grid container direction="row">
                        <Grid item>                        
                            <Typography id="header-mini" variant="display1">VETHarbor</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="flex-end">
                            <Typography>Hello {UserName}!</Typography>

                            <Button onClick={this.handleEditProfile}> Edit Profile </Button>

                            <Button onClick={this.handleLogout}> Logout </Button>
                    </Grid>

                </Toolbar>
            </AppBar>
        </div>);
        
    }
}

export default Navbar