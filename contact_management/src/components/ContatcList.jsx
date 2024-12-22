import React from "react";
import ContactInfo from "./ContactInfo";

const ContactList = ({contacts}) =>{
    return (
        <ul>
            {contacts.map((contact, index) => (
                <ContactInfo key={index} contact={contact} />
                ))}
        </ul>
    )
}
export default ContactList;