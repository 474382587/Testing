import React from 'react'
import TweetList from '../components/TweetList'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
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
        this.props.onLogin()
    }
    render() {
        return (
            <div className="container" >
                <LoginForm></LoginForm>
                <div className="col-3of5 bg-white">
                    <TweetList tweets={this.state.tweets}></TweetList>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogin: () => {
            console.log("login@@@@@@")
            console.log(login())
            dispatch(login())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)