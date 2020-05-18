import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignupForm extends Component {
    constructor() {
        super()
        this.state = {
            password: '',
            password2: '',
            username: ''
        }
    }
    handleFormSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }
    handleInputChange = e => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="col-2of5 bg-white profile user-auth">
                <h3>Sign up Web Tweet</h3>
                <form id="signup-form" onSubmit={this.handleFormSubmit}>
                    <input onChange={this.handleInputChange} className="input-auth" type="text" placeholder="Username" id="username" name="username" />
                    <input onChange={this.handleInputChange} className="input-auth" type="password" placeholder="Password" id="password" name="password" />
                    <input onChange={this.handleInputChange} className="input-auth" type="password" placeholder="Repeat password" id="repeat-password" name="password2" />
                    <button onClick={this.handleFormSubmit} className="btn-primary" type="submit" id="signup-btn">Sign up</button>
                </form>
                <h6 className="">Have an account? <Link to="/login">Log in</Link></h6>
               
            </div>
        )
    }
}

export default SignupForm