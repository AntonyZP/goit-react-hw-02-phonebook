import React, { Component } from "react";
import { nanoid } from 'nanoid'
import ContactList from 'components/ContactList';
// import { ContactName } from "components/ContactList/Contact.styled";
import ContactForm from 'components/ContactForm';

export default class App extends Component {
  state ={
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    inputName: '',
    inputNumber: '',
 
  }

addContact = contact => {
  this.setState(prevState => ({
    contacts: [
      ...prevState.contacts,
      {id: nanoid(), name: contact.name, number: contact.number}
    ]
  }))
} 

deleteContact = (contactId) =>{
  this.setState(prevState =>({
    contacts: prevState.contacts.filter(contact =>
       contact.id !== contactId),
  }))
}

render () {
const {contacts} = this.state;

    return ( 
      <>
      <h1>Phonebook</h1>

<ContactForm></ContactForm>

       <h2>Contacts</h2>

        <ContactList contacts={contacts} onDeleteContact={this.deleteContact}/>

      
      </>
     );
  }
}
 