import React, { Component } from 'react'
import { Avatar } from '@material-ui/core'
import '../Profile/Profile.css'
import { IconButton, Grid, Input } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class ProfilePhoto extends Component {

    constructor(props) {
        super(props)

        this.state = {
            imgUrl: JSON.parse(localStorage.getItem("ProfileImage"))
        }
    }

    handleImageUpload = (e) => {
        //get the image file
        const selectedFile = e.target.files[0]

        //converts file to a url...
        const imgData = window.URL.createObjectURL(selectedFile)

         localStorage.setItem("ProfileImage", JSON.stringify(imgData))

        this.setState({
             imgUrl: imgData
         })
    }
    
    handleImageSave = function (e) {

        e.preventDefault();
        
        const ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"))

        alert("Your profile image has saved!")

        fetch(`http://localhost:8088/users/${ActiveUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                imgUrl: this.state.imgUrl
            })
        })
    }.bind(this)

    componentDidMount(){
 
        //fetch image url from vetharbor api
        //if not null, set imgUrl state with stored image url
        //if not null, show fetched image url at all times
        //and on refresh
    }


    render() {
        
        if(this.state.imgUrl === null){
            return (
                <Grid item className="profile-photo" xs={12}>
                    <Grid container direction="column">
                        <Grid item className="img-preview" xs={12}>
                            <Avatar id="avatar" src="http://placehold.it/175x175" alt="" />
                       
                        </Grid>
                        <Grid item>
                                <form id="myPhotoForm" name="myPhotoForm" onSubmit={this.handleImageSave}>
                            <Grid container alignItems="center" spacing={0}>
                                <Grid item xs={10}>
                                    <Input type="file" id="input-imgUrl" name="imgUrl" onChange={this.handleImageUpload}disableUnderline fullWidth/>
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton variant="extendedFab" type="submit" value="Submit!">
                                        <FontAwesomeIcon className="icon" icon="save" size="sm" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                                </form>
                            
                        </Grid>
                    </Grid>
                </Grid>
            )
        } else {
            return (
                <Grid item className="profile-photo" xs={12}>
                <Grid container direction="column">
                    <Grid item className="img-preview" xs={12}>
                    <Avatar id="avatar" src={this.state.imgUrl} alt="" />
                   
                    </Grid>
                    <Grid item>
                            <form id="myPhotoForm" name="myPhotoForm" onSubmit={this.handleImageSave}>
                        <Grid container alignItems="center" spacing={0}>
                            <Grid item xs={10}>
                                <Input type="file" id="input-imgUrl" name="imgUrl" onChange={this.handleImageUpload}disableUnderline fullWidth/>
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton variant="extendedFab" type="submit" value="Submit!">
                                    <FontAwesomeIcon className="icon" icon="save" size="sm" />
                                </IconButton>
                            </Grid>
                        </Grid>
                            </form>
                        
                    </Grid>
                </Grid>
            </Grid>
            )
        }
    }
}

export default ProfilePhoto