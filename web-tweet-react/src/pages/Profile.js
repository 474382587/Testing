import React from 'react'
import TweetList from '../components/TweetList'
import UserCard from '../components/UserCard'
const baseUrl = 'https://tweet-api.webdxd.com/'

class Profile extends React.Component {
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
        if (!JSON.parse(window.localStorage.getItem('login'))) {
            this.props.history.push('/login')
        } else {
            const tweets = (await this.loadAllTweets()).tweets || []
            this.setState({
                tweets
            })
        }

        console.log(this.state)
    }
    render() {
        return (
            <div className="container" >
                <UserCard isProfilePage={true}></UserCard>
                <div className="col-3of5 bg-white">
                    <TweetList tweets={this.state.tweets}></TweetList>
                </div>
            </div>
        )
    }
}

export default Profile