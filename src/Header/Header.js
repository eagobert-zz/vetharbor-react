import React, { Component } from 'react'
import '../Header/Header.css'
import Typography from '@material-ui/core/Typography'


class Header extends Component {
    render() {
        return (
            <div className="heading">
                <Typography id="header" variant="display3">
                    VETHarbor
                </Typography>
                <Typography id="subheader" variant="title">
                    therapeautic resources for Veterans. . .
                </Typography>
            </div>
        )
    }
}

export default Header