import React from 'react'
import { connect } from 'react-redux'
import {
    Link,
} from 'react-router-dom'
const NavBar = (props) => {
    return (
        <nav className="nav-bar">
            <div className="container nav-container">
                <ul>
                    <li>
                        <Link to='/'>
                            <img className="logo" src="./webdxd.png" alt="webdxd" />
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                </ul>
                <div>
                
                    {   
                        props.authorized ? (<Link to='/profile'>
                        <img className="avatar-sm" src="./sample-avatar.png" alt="avatar" />
                    </Link>) : ''
                    }

                </div>
            </div>
        </nav>
    )
}

export default connect(state => ({
    authorized: state.auth.authorized
}))(NavBar)