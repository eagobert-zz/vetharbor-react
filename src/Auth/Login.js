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
            <div>
                <Header />
                <form onSubmit={this.handleLogin}>
                    <Grid container id="form-login" justify="center">
                        <Grid item>
                            <Typography id="login-title" variant="title">Log-In</Typography>
                        </Grid>

                        <Grid container direction="column">
                            <Grid container>
                                <Grid item>
                                    <InputLabel>Email: </InputLabel>
                                </Grid>
                                <Grid item>
                                    <Input id="input-email" type="email" name="email" autoComplete="email" onChange={this.handleFieldChange} disableUnderline></Input>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <InputLabel>Password: </InputLabel>
                                </Grid>
                                <Grid item>                            
                                    <Input id="input-password" type="password" name="password" autoComplete="new-password" onChange={this.handleFieldChange} disableUnderline></Input>
                                </Grid>
                            </Grid>
                            <Grid item>                            
                                <Button variant="contained" size="large" type="submit" fullWidth>Log In</Button>
                            </Grid>
                        </Grid>


                        <p>New to VETHarbor?</p>
                        <h4><a href="" onClick={this.handleRegisterLink}>Register as a new user </a></h4>
                    </Grid>
                </form>

            </div>
        )

    }
}

export default Login