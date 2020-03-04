import React, {Component} from 'react';

class Avatar extends Component {
    render() {
        return (
            <div
                className='contact-avatar'
                style={{
                    backgroundImage: `url(${this.props.avatarURL})`
                }}>
            </div>
        )
    }
}
export default Avatar