import React, { Component } from 'react'
import '../Header/Header.css'
import { Grid, Typography} from '@material-ui/core'


class Header extends Component {
    render() {
        return (
            <Grid item className="heading">
                <Typography id="header" variant="display3">
                    VETHarbor
                </Typography>
                <Typography id="subheader" variant="title">
                    Wellness & Recreational Resources for Veterans. . .
                </Typography>
            </Grid>
        )
    }
}

export default Header