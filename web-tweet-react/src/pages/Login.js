import React from 'react'
import TweetList from '../components/TweetList'
import LoginForm from '../components/LoginForm'
const baseUrl = 'https://tweet-api.webdxd.com/'

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
        console.log(this.state)
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

export default Login