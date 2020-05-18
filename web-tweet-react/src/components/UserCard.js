import React from 'react'
import { withRouter } from 'react-router-dom'

class UserCard extends React.Component {

    constructor(props) {
        super(props)
    }
    handleLogout = () => {
        console.log('LOGOUT')
        window.localStorage.clear('login')
        this.props.history.push('/login')
    }
    render() {
        return (
            <div className="col-2of5 bg-white profile">
                <img className="avatar" src="https://cdn.filestackcontent.com/5AXTV5zURNmwU1xVCPy4" alt="avatar" />
                <h3>
                    123
                </h3>
                <h5>
                    @123
                </h5>
                <h4>
                    <i className="fas fa-map-marker-alt"></i>
                </h4>
                <p className="center">
                </p>
                {
                    this.props.isProfilePage ? <React.Fragment>
                        <a className="btn-border space-top" href="profile-edit.html">Edit profile</a>
                        <button onClick={this.handleLogout} className="btn-border space-top" id="logout-btn">Log out</button>
                    </React.Fragment> : ''
                }

            </div>
        )

    }
}

export default withRouter(UserCard)