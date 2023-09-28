import ProfileComponent from './ProfileComponent'
import React from 'react'
import ProfileClass from './ProfileClass'
class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }

        console.log('Parnet constructor')
    }
    componentDidMount(){
        console.log("Parent compoentDidMount")
    }
    componentDidUpdate(){
        console.log("parent componentDidUpdate")
    }
    render(){
        console.log('Parent render')
        return (
            <>
                <h1>
                    About us page
                </h1>
                {/* <ProfileComponent name={"bheem"} age={12} /> */}
                <ProfileClass name={"bheeem class"} age={14}/>
                {/* <ProfileClass name={"bheeem class"} age={14}/> */}

                <button onClick={()=> this.setState({
                    count:1
                })}>Click parent button</button>
            </>
        )
    }
}

export default About


/**
 * 
 * parent constructor
 * parent render
 * 
 * child contructor
 * child render
 * 
 * parent componentDidmount
 * 
 * child componentDidMount
 * 
 * child render
 * 
 * 
 */