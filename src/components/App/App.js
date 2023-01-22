import React, { Component } from "react";
import ContactList from 'components/ContactList';


export default class App extends Component {
  state ={}

  render () {
    return ( 
      <>
      <h1>ContactList</h1>
      <ContactList/>
      </>
     );
  }
}
 