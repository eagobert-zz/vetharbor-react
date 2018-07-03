//Purpose:  Component to displa a list of user interests by authenticated user
import React, { Component } from 'react'
import { Card, Grid, Typography } from '@material-ui/core'
import { Tag } from 'react-materialize'
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
        
        return(
            <Grid item className="interests" xs={12}>
                <Grid container direction="row" spacing={16}>
                    <Grid item xs={12}>
                        <Typography variant="subheading">My Interests</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className="interests-card" raised>
                            
                                {this.state.interests.map(interest => {
                                    return <Tag key={interest.id} className="chip">
                                        {interest.keyword}
                                    </Tag>
                                   
                                        
                                })}
                          
                        </Card>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}

export default Interests