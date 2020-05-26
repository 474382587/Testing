import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            username: ''
        }
    }
    handleFormSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        if (this.validate()) {
            // window.localStorage.setItem('login', JSON.stringify(true))
            this.props.login(this.state)
        }
    }
    validate() {
        return true
    }
    handleInputChange = e => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="col-2of5 bg-white profile user-auth">
                <h3>Log in to Web Tweet</h3>
                <form id="signup-form" onSubmit={this.handleFormSubmit}>
                    <input onChange={this.handleInputChange} className="input-auth" type="text" placeholder="Username" id="username" name="username" />
                    <input onChange={this.handleInputChange} className="input-auth" type="password" placeholder="Password" id="password" name="password" />
                    <button onClick={this.handleFormSubmit} className="btn-primary" type="submit" id="login-btn">Log in</button>
                </form>
                <h6 className="">Have an account? <Link to="/signup">Sign up</Link></h6>

            </div>
        )
    }
}

export default connect(state => ({}), {
    login
})(LoginForm)