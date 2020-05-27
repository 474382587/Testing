import React from 'react'
import TweetList from '../components/TweetList'
import UserCard from '../components/UserCard'
import { connect } from 'react-redux'
import { logout, updateProfile } from '../actions/auth'
import EditProfile from '../components/EditProfile'
const baseUrl = 'https://tweet-api.webdxd.com/'

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            tweets: [],
            display: false
        }
    }

    loadAllTweets = async () => {
        const res = await fetch(baseUrl + 'tweet')
        return res.json()
    }

    toggleEdit = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                display: !prevState.display
            }
        })
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
                <div>

                    {
                        this.state.display ? <EditProfile toggleEdit={this.toggleEdit} handleSubmit={this.props.updateProfile} /> : ''
                    }

                    <UserCard editProfile={this.toggleEdit} profile={this.props.profile} isProfilePage={true} logout={this.props.logout}></UserCard>
                </div>

                <div className="col-3of5 bg-white">
                    <TweetList tweets={this.state.tweets}></TweetList>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    profile: state.auth.profile
}), {
    logout,
    updateProfile
})(Profile)