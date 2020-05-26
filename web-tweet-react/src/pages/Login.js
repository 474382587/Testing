import React from 'react'
import TweetList from '../components/TweetList'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import { Redirect } from 'react-router-dom'
const baseUrl = 'https://tweet-api.webdxd.com/'


// import 

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            tweets: [],
        }
    }

    loadAllTweets = async () => {
        const res = await fetch(baseUrl + 'tweet')
        return res.json()
    }

    async componentDidMount() {
        const tweets = (await this.loadAllTweets()).tweets || []
        this.setState({
            tweets
        })
        console.log(this.props)
    }
    render() {
        return this.props.authorized ? (<Redirect to='/' />) : (
            <div className="container" >
                <LoginForm></LoginForm>
                <div className="col-3of5 bg-white">
                    <TweetList tweets={this.state.tweets}></TweetList>
                </div>
            </div>
        )
    }
}




export default connect(state => ({
    authorized: state.auth.authorized
}))(Login)