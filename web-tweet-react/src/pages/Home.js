import React from 'react'
import TweetList from '../components/TweetList'
import UserCard from '../components/UserCard'
import TweetForm from '../components/TweetForm'
import { Router } from 'react-router-dom'

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
        if (!JSON.parse(window.localStorage.getItem('login'))) {
            this.props.history.push('/login')
        } else {
            const tweets = (await this.loadAllTweets()).tweets || []
            this.setState({
                tweets
            })
        }


    }


    render() {
        return (
            <div>
                <div className="container">
                    <UserCard></UserCard>
                    <div className="col-3of5 bg-white">
                        <TweetForm></TweetForm>
                        <TweetList tweets={this.state.tweets}></TweetList>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home