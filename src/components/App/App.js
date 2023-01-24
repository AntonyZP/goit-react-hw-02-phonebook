import React, { Component } from "react";
import { nanoid } from 'nanoid'
import ContactList from 'components/ContactList';
// import { ContactName } from "components/ContactList/Contact.styled";
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

export default class App extends Component {
  state ={
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:'', 
  }

deleteContact = (contactId) =>{
  this.setState(prevState =>({
    contacts: prevState.contacts.filter(contact =>
       contact.id !== contactId),
  }))
}

formSubmitHandler = contact => {
  this.setState(prevState => ({
    contacts: [
        { id: nanoid(), 
        name: contact.inputName, 
        number: contact.inputNumber },
        ...prevState.contacts,
    ],
  }));
};

changeFilter =e=> {
  this.setState({filter: e.currentTarget.value})
}

getVisibleContacts = () => {
  const { contacts, filter } = this.state;
  return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  
}


render () {
  const { filter} = this.state;
  const visibleContacts = this.getVisibleContacts();

    return ( 
      <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit ={this.formSubmitHandler} ></ContactForm>
      
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter} />      
      <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
    
      </div>
     );
  }
}
 