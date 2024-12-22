import React from 'react';

const ContactInfo = ({contact}) => {
    return (
        <li>
            {contact.name} - {contact.email} - {contact.phoneNumber}
        </li>
    )
}

export default ContactInfo