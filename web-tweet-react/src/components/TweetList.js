import React from 'react'
import Tweet from './Tweet'

class TweetList extends React.Component {

    constructor(props) {
        super(props)
    }


    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        if (this.props.tweets && this.props.tweets.length) {
            return this.props.tweets.map(tweet => <Tweet tweet={tweet} key={tweet._id}></Tweet>)
        }
        return <h1>this is a list</h1>
    }

}

export default TweetList