import React, { Component } from 'react'

class ProfilePhoto extends Component {

    constructor(props){
        super(props)
        this.state = {
            imgUrl: localStorage.getItem("ProfileImage") || ""
        }
    }

    handleImageUpload = function(e){

        //get the image file
        const selectedFile = e.target.files[0]

        //need to convert to acceptable format for posting...
        const imgData = window.URL.createObjectURL(selectedFile)

        this.setState({
            imgUrl: imgData
        })
        console.log(imgData)
    }.bind(this)

    handleImageSave = function(e){
        e.preventDefault();
        
        const ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"))

        //on submit, imgUrl will be saved to localstorage
        localStorage.setItem("ProfileImage", JSON.stringify({
            id: ActiveUser.id,
            url: this.state.imgUrl
        }))
    }.bind(this)
    
    // shouldComponentUpdate(){
    //     const ProfileImage = localStorage.getItem("ProfileImage")
    //     this.setState({
    //         imgUrl: ProfileImage.url
    //     })
    // }


    render(){
        return(
            <div className="profile-photo">
                <div className="img-preview">
                <img src={this.state.imgUrl} alt=""/>
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