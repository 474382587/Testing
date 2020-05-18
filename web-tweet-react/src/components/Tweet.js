import React from 'react'
import moment from 'moment'
class Tweet extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        if (this.props.tweet) {
            const { author, content, createdAt, _id } = this.props.tweet
            const imageUrl = this.props.tweet.imageUrl || ''
            return (
                <div className="tweet" id={_id}>
                    <div className="row relative">
                        <img className="tweet-avatar" src={author ? author.avatarUrl : ''} alt="avatar" />
                        <h4>
                            <b>{author.name}</b>
                        </h4>
                        <h5>@{author.username}</h5>
                        <h5>{moment(createdAt).format('MM/DD/YYYY')}</h5>
                    </div>
                    <p>{content}
                    { imageUrl ? <React.Fragment><br/><img src={imageUrl} /></React.Fragment> : '' }
                    </p>
                </div>
            )

        }
        return <div>This is no Tweet</div>

    }


}

export default Tweet