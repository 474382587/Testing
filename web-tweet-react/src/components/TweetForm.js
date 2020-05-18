import React from 'react'

class TweetForm extends React.Component {
    constructor(props) {
        super(props)
    }
    handleChange = e => {
        console.log(e.target.value)
    }
    render() {
        return (
            <div className="tweet">
                <form id="tweet-form">
                    <div className="row">
                        <img className="avatar-sm v-top" src="./sample-avatar.png" alt="avatar" />
                        <textarea onChange={this.handleChange} className="input-tweet" placeholder="What's up?" id="tweet-content"></textarea>
                    </div>
                    <div className="row tweet-actions">
                        <input type="hidden" role="uploadcare-uploader" name="content" id="tweet-image" data-public-key="7d92f12ba9b3c1d2afd1" data-images-only />
                        <button className="btn-clear" type="button"><i className="far fa-image" id="tweet-image-btn"></i></button>
                        <button className="btn-primary" type="button" id="post-btn" disabled>Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TweetForm