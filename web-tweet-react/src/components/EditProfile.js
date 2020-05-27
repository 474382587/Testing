import React from 'react'

class EditProfile extends React.Component {

    state = {
        name: '',
        location: '',
        avatarUrl: '',
        bio: ''
    }
    handleInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        console.log('name: ', name)
        console.log('value: ', value)
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="edit-container">
                <div>
                    <input name="name" placeholder="name" onChange={this.handleInputChange} />
                </div>
                <div>
                    <input name="location" placeholder="location" onChange={this.handleInputChange} />
                </div>
                <div>
                    <textarea name="bio" name="bio" placeholder="bio" onChange={this.handleInputChange} ></textarea> 
                </div>
                <div>
                    <input name="avatarUrl" onChange={this.handleInputChange} />
                </div>
                <button onClick={() => {
                    this.props.toggleEdit()
                    this.props.handleSubmit(this.state)
                }}>Submit</button>
            </div>
        )
    }
}

export default EditProfile