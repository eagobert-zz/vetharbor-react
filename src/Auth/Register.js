//Purpose:  Component to register a new user
import React, { Component } from 'react'

class Register extends Component {

       constructor(props){

           super(props)

           this.state = {
            userName: "",
            city: "",
            state: "",
            email: "",
            password: ""
        }
       }

    // Update state whenever an input field is edited
    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    // Handle for register submit
    handleRegister = function (e) {
        e.preventDefault()

        // ??? Determine if a user already exists in API
        fetch(`http://localhost:8088/users?email=${this.state.email}`)
            .then(r => r.json())
            .then(user => {

                // User exists. Set local storage, and show home view
                if (user.length) {
                    this.props.setActiveUser(user[0].id)
                    this.props.showView("home")

                    // User doesn't exist
                } else {
                    // Create user in API
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            userName: this.state.firstName,
                            city: this.state.city,
                            state: this.state.state,
                            email: this.state.email,
                            password: this.state.password
                        })
                    })

                        // Set local storage with newly created user's id and show home view
                        .then(activeUser => {
                            this.props.setActiveUser(activeUser.id)
                            this.props.showView("home")
                        })
                }

            })
    }.bind(this)
    
    render() {

        return (
            <div>
                <form>
                    
                </form>

            </div>);

    }
}

export default Register