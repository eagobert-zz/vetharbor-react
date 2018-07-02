import React, { Component } from 'react'
import '../Navbar/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@material-ui/core'

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
            <AppBar id="navbar">

                <Toolbar>
                    <Grid container direction="row">
                        <Grid item>                        
                            <Typography id="header-mini" variant="display1">VETHarbor</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="flex-end" alignItems="center" spacing={24}>
                            <Grid item>
                                <Grid container direction="row" spacing={8} alignItems="center">
                                    <Grid item>
                                        <Typography id="greeting" variant="headline">Hello</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography id="username" variant="headline">{UserName}!</Typography>
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                            <Grid item>
                                <IconButton className="button-icon" onClick={this.handleEditProfile}> 
                                    <FontAwesomeIcon className="icon" icon="user-cog" size="lg"/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton className="button-icon" onClick={this.handleLogout}> 
                                    <FontAwesomeIcon className="icon" icon="sign-out-alt" size="lg"/>
                                </IconButton>
                            </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </div>);
        
    }
}

export default Navbar