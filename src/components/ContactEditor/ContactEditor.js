import React, {Component} from "react";

class ContactEditor extends Component {
    state = {};

  render(){
    return(
        <form>
            <label>
                Name
                <input  
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required>
                </input>
            </label>
        </form>
    )
  }  
}




export default ContactEditor;