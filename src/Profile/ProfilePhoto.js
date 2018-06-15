import React, { Component } from 'react'

class ProfilePhoto extends Component {

    constructor(props){
        super(props)
        this.state = {
            file: null
        }
    }

    handleImageUpload = function(e){
        const selectedFile = e.target.files[0]
        //need to convert to acceptable format for posting...
        const imgData = window.URL.createObjectURL(selectedFile)

        this.setState({
            file: imgData
        })
        //console.log(this.state)
    }.bind(this)

    handleImageSave = function(e){
        e.preventDefault();  
    }

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