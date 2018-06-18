import React, { Component } from 'react'

class ProfilePhoto extends Component {

    constructor(props) {
        super(props)

        this.state = {
            imgUrl: JSON.parse(localStorage.getItem("ProfileImage")) || []
        }
    }

    handleImageUpload = function (e) {

        //get the image file
        const selectedFile = e.target.files[0]

        //need to convert to acceptable format for posting...
        const imgData = window.URL.createObjectURL(selectedFile)

        //const ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"))

        localStorage.setItem("ProfileImage", JSON.stringify(imgData))

        this.setState({
            imgUrl: imgData
        })

        console.log(imgData)
        console.log(this.state.imgUrl)

    }.bind(this)

    handleImageSave = function (e) {
        e.preventDefault();
        alert("Your profile image has saved!")
 
    }

    componentDidMount() {

     let ProfileImage = localStorage.getItem("ProfileImage").substring(5)
     console.log(ProfileImage)
     console.log(this.state.imgUrl)

    }


    render() {
        
        return (
            <div className="profile-photo">
                <div className="img-preview">
                    <img src="http://placehold.it/175x175" alt="" />
                    {/* <img src={this.state.imgUrl} alt="" /> */}
                </div>

                <form id="myPhotoForm" name="myPhotoForm" onSubmit={this.handleImageSave}>
                    <input type="file" id="imgUrl" name="imgUrl" onChange={this.handleImageUpload} />
                    <button type="submit" value="Submit!">Upload</button>
                </form>
            </div>
        )
    }
}

export default ProfilePhoto