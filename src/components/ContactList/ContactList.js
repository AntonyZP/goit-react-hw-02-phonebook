import React from "react";

import {Contact, ContactName} from './Contact.styled'

const ContactList = ({contacts, onDeleteContact}) => <ul>{contacts.map(({id, name, number} )=>
    <Contact key = {id}>
        <ContactName> {name}</ContactName>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
    </Contact>
    )


}
</ul>


export default ContactList;