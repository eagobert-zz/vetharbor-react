import React, { Component } from 'react'
import { Avatar } from '@material-ui/core'
import '../Profile/Profile.css'
import { Grid } from '@material-ui/core'


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
                <Grid item className="profile-photo">
                    <div className="img-preview">
                        <Avatar id="avatar" src="http://placehold.it/175x175" alt="" />
                       
                    </div>
    
                    <form id="myPhotoForm" name="myPhotoForm" onSubmit={this.handleImageSave}>
                        <input type="file" id="imgUrl" name="imgUrl" onChange={this.handleImageUpload} />
                        <button type="submit" value="Submit!">Upload</button>
                    </form>
                </Grid>
            )
        } else {
            return (
                <Grid className="profile-photo">
                    <div className="img-preview">
                        <Avatar id="avatar" src={this.state.imgUrl} alt="" />
                    </div>
    
                    <form id="myPhotoForm" name="myPhotoForm" onSubmit={this.handleImageSave}>
                        <input type="file" id="imgUrl" name="imgUrl" onChange={this.handleImageUpload} />
                        <button type="submit" value="Submit!">Upload</button>
                    </form>
                </Grid>
            )
        }
    }
}

export default ProfilePhoto