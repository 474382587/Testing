import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AuthRoute extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        // console.log(111)
        const WrappedComponent = this.props.component
        // console.log(WrappedComponent)
        return this.props.authorized ? <WrappedComponent /> : <Redirect to='/' />
    }
}

export default connect(state => ({
    authorized: state.auth.authorized
}))(AuthRoute)