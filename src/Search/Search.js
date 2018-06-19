import React, { Component } from 'react'
import '../Search/Search.css'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchInput: ""
        }
    }

handleSearch = (evt) => {
    this.setState({
        searchInput: evt.target.value
    })

}

handleSubmit = (evt) => {

 alert("Your search has been submitted")

 //create a fetch request from the eventbrite api.  use interpolation to input keyword from search

 //convert data to json

 //return display results in render below

}

    render(){

        return(
        <div className="search">
            <div className="search-input">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleSearch}/>
                </form>
            </div>
            
            <div className="search-display">
        
                <p>This is truly an almighty mountain. I want everbody to be happy. That's what it's all about. Only eight colors that you need. I sincerely wish for you every possible joy life could bring. There is immense joy in just watching - watching all the little creatures in nature. If you hypnotize it, it will go away.</p>

                <p>Just make a decision and let it go. You're meant to have fun in life. Everybody needs a friend. Automatically, all of these beautiful, beautiful things will happen. If you do too much it's going to lose its effectiveness.</p>

                <p>In your imagination you can go anywhere you want. We have a fantastic little sky! We'll lay all these little funky little things in there.</p>

                <p>As trees get older they lose their chlorophyll. At home you have unlimited time. That's the way I look when I get home late; black and blue. The little tiny Tim easels will let you down. Now let's put some happy little clouds in here.</p>
         
            </div>
        </div>);
        
    }
}

export default Search