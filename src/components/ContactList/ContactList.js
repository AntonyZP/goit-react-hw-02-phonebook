import React from "react";
import PropTypes from 'prop-types';


import {Contact, ContactName, ContactNumber, DeleteButton} from './ContactList.styled'

const ContactList = ({contacts, onDeleteContact}) =>
 <ul>
    {contacts.map(({id, name, number} )=>
    <Contact key = {id}>
             
        <ContactName>
          {name}
            <ContactNumber> {number}</ContactNumber>
        </ContactName>
            <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
    </Contact>
    )
}
</ul>


export default ContactList;


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
