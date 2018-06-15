import React, { Component } from 'react'

class ProfilePhoto extends Component {

    constructor(props){
        super(props)
        this.state = {
            file: null
        }
    }

    handleImageUpload = function(e){

        //get the image file
        const selectedFile = e.target.files[0]

        //need to convert to acceptable format for posting...
        const imgData = window.URL.createObjectURL(selectedFile)

        this.setState({
            file: imgData
        })
        console.log(imgData)
    }.bind(this)

    handleImageSave = function(e){
        e.preventDefault();
        //const ActiveUser = this.props.activeUser.id

        fetch("http://localhost:8088/photos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: this.props.activeUser.id,
                url: this.state.file
            })
        })
    }.bind(this)

    render(){
        return(
            <div className="profile-photo">
                <div className="img-preview">

                </div>
                <form  id="myPhotoForm" name="myPhotoForm" onSubmit={this.handleImageSave}>
                    <input type="file" id="imgUrl" name="imgUrl" onChange={this.handleImageUpload}/>
                    <button type="submit" value="Submit!">Upload</button>
                </form>
            </div>
        )
    }
}

export default ProfilePhoto