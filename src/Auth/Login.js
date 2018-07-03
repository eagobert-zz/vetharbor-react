import React, { Component } from 'react'
import Header from '../Header/Header'
import '../Auth/Auth.css'
import { Button, Grid, Input, InputLabel, Typography } from '@material-ui/core'



class Login extends Component {

    //function to manage changes to input field
    handleFieldChange = function (e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }.bind(this)

    //function to manage registration of user form
    handleLogin = function (e) {
        e.preventDefault()

        // Determine if a user already exists in API
        fetch(`http://localhost:8088/users?email=${this.state.email}`)
            .then(r => r.json())
            .then(user => {
                // If a user length exists. Set local storage, and show home view

                if (user.length) {

                    this.props.setActiveUser({
                        id: user[0].id,
                        username: user[0].username
                    })
                    this.props.showView("home")

                    // If user doesn't exist in API
                } else {

                    this.props.setActiveUser(null)
                    this.props.showView("register")
                }

            })
    }.bind(this)

    handleRegisterLink = (evt) => {
        evt.preventDefault()
        this.props.showView("register")
    }

    render() {

        return (
            <div id="login">
                <Header />
                <form id="form-login" onSubmit={this.handleLogin}>
                    <Grid container justify="center" direction="column" spacing={24}>
                        <Grid item>
                            <Typography id="login-title" variant="title">Log-In</Typography>
                        </Grid>

                        <Grid container direction="column">
                            <Grid container className="form-fields" alignItems="center" spacing={8}>
                                <Grid item xs={4}>
                                    <InputLabel>Email: </InputLabel>
                                </Grid>
                                <Grid item xs={8}>
                                    <Input id="input-email" type="email" name="email" autoComplete="email" onChange={this.handleFieldChange} disableUnderline fullWidth></Input>
                                </Grid>
                            </Grid>
                            <Grid container className="form-fields" alignItems="center" spacing={8}>
                                <Grid item xs={4}>
                                    <InputLabel>Password: </InputLabel>
                                </Grid>
                                <Grid item xs={8}>                            
                                    <Input id="input-password" type="password" name="password" autoComplete="new-password" onChange={this.handleFieldChange} disableUnderline fullWidth></Input>
                                </Grid>
                            </Grid>
                            <Grid item>                            
                                <Button variant="contained" size="large" type="submit" fullWidth>Log In</Button>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Typography variant="body1">New to VETHarbor?</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subheading"><a href="" onClick={this.handleRegisterLink}>Register as a new user </a></Typography>
                        </Grid>
                    </Grid>
                </form>

            </div>
        )

    }
}

export default Login