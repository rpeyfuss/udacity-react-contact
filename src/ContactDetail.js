import React, {Component} from 'react';

class ContactDetail extends Component {
    render() {
        return (
            <div className='contact-details'>
                <p>{this.props.name}</p>
                <p>{this.props.handle}</p>
            </div>
        )
    }
}

export default ContactDetail