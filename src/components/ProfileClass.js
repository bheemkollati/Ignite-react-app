
import React from 'react'

class ProfileClass extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            count:0,
            user:{}
        }

        console.log("child constructor")

    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/bheemkollati")
        const jsonData = await data.json()
        this.setState({
            user: jsonData
        })
        console.log('child componentDidMount')
    }

    componentDidUpdate(){
        console.log("child componentDidUpdate")
    }

    render(){
        console.log("child render")
        return (
            <>
                <h1>
                    Profile Class Component - {this.state.count}
                </h1>
                <h2>Name - {this.props.name}</h2>
                <h2>Age - {this.props.age}</h2>
                <button onClick={() => this.setState({
                    count:1
                })}>Click me</button>

                <h2>User Data</h2>
                <img src={this.state.user.avatar_url} alt="" height="150px"/>
                <div>Name - {this.state.user.name}</div>

            </>
        )
    }
}

export default ProfileClass