import React from 'react'

import {
    Link,
} from 'react-router-dom'
const NavBar = () => {
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
                    <Link to='/profile'>
                        <img className="avatar-sm" src="./sample-avatar.png" alt="avatar" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar