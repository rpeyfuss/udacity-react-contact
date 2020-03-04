import React, {Component} from 'react';
import Avatar from './Avatar';
import ContactDetail from './ContactDetail'

class ListContacts extends Component {

    render() {
        return (
            <ol className='contact-list'>
                { this.props.contacts.map( (contact) => (
                    <li key={contact.id} className='contact-list-item'>
                        <Avatar avatarURL={contact.avatarURL} />
                        <ContactDetail name={contact.name} handle={contact.handle} />
                        <button className='contact-remove'>
                            Remove
                        </button>
                    </li>)
                )}
            </ol>
        )
    }
}
export default ListContacts