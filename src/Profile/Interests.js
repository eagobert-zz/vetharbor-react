//Purpose:  Component to displa a list of user interests by authenticated user
import React, { Component } from 'react'
import { Card, Grid, Typography } from '@material-ui/core'
import { Chip } from 'react-materialize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Profile/Profile.css'

class Interests extends Component {

    constructor(props){
        super(props)
        this.state = {
            interests: []
        }
    }

    //Fetch interests from interest table in Api belonging to the active user
    componentDidMount(){
        //Get active user
        let ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"))
        fetch(`http://localhost:8088/interests?userId=${ActiveUser.id}`)
        .then(r => r.json())
        .then(interests => {
            this.setState({
                interests: interests
            })
            console.log(this.state)
        })
    }

    //Map through interests and display results
    render(){
        const button = 
            <FontAwesomeIcon className="icon" icon="times-circle" size="lg"/>
       
        return(
            <Grid item className="interests" xs={12}>
                <Grid container direction="row" spacing={16}>
                    <Grid item xs={12}>
                        <Typography variant="subheading">My Interests</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className="interests-card" raised>
                            <Grid container direction="row" justify="flex-start" alignItems="center" wrap="wrap" spacing={0}>
                                {this.state.interests.map(interest => {
                                    return <Grid item xs key={interest.id}> <Chip className="chip">
                                        {interest.keyword}{button}
                                    </Chip>
                                    </Grid>
                                        
                                })}
                            </Grid>
                        </Card>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}

export default Interests