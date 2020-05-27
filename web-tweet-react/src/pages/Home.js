import React from 'react'
import TweetList from '../components/TweetList'
import UserCard from '../components/UserCard'
import TweetForm from '../components/TweetForm'
import { Router } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { login } from '../actions/auth'
const baseUrl = 'https://tweet-api.webdxd.com/'

class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            tweets: []
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
    }


    render() {
        return (
            <div>
                <div className="container">
                    {
                        !this.props.authorized ? <LoginForm login={this.props.login} /> : <UserCard profile={this.props.profile} />
                    }
                    <div className="col-3of5 bg-white">
                        <TweetForm></TweetForm>
                        <TweetList tweets={this.state.tweets}></TweetList>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    authorized: state.auth.authorized,
    profile: state.auth.profile
}), {
    login
})(Home)