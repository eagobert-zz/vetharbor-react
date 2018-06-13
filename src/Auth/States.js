//Purpose:  Component to hold list of state abbreviations
// import React, { Component } from 'react'

// class States extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             usStates: []
//         }
//     }
//     componentDidMount(){
        
//         fetch('http://localhost:8088/us_states')
//             .then(response => response.json())
//             .then(state => {
//                 this.setState({
//                     usStates: state
//                 })
                
//             })
//         }

//         render(){
//            const optionItems = this.state.usStates.map(s => {
//                 return <option key={s.stateAbr}>{s.stateAbr}</option>
//            })
//             return(
//                 <select autoComplete="address-level1">
//                     {optionItems}
//                 </select>
//             )
//         }
//     }


// export default States