import React from 'react'

class UserCard extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }
    handleLogout = () => {
        this.props.logout()
    }
    render() {
        return (
            <div className="col-2of5 bg-white profile">
                <img className="avatar" src={this.props.profile.avatarUrl} alt="avatar" />
                <h3>
                    {
                        this.props.profile.name
                    }
                </h3>
                <h5>
                    @{this.props.profile.username}
                </h5>
                <h4>
                    <i className="fas fa-map-marker-alt"></i>
                    {
                        this.props.profile.location
                    }
                </h4>
                <p className="center">
                    {
                        this.props.profile.bio
                    }
                </p>
                {
                    this.props.isProfilePage ? <React.Fragment>
                        <a className="btn-border space-top" href="profile-edit.html" onClick={e => {
                            e.preventDefault()
                            this.props.editProfile()
                        }}>Edit profile</a>
                        <button onClick={this.handleLogout} className="btn-border space-top" id="logout-btn">Log out</button>
                    </React.Fragment> : ''
                }

            </div>
        )

    }
}

export default UserCard