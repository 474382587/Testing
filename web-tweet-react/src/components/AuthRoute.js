import React from 'react'

class AuthRoute extends React.Component {
        
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        
        // if(!this.props.isAuthorized) {
        //     this.props.history.push('/login')                
        // } else {
        //     console.log('I am login user')
        // }
        
    }
    
    render() {
        console.log(111)
        const WrappedComponent = this.props.component
        console.log(WrappedComponent)
        return <WrappedComponent />
    }
}

export default AuthRoute