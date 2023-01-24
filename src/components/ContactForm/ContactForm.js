 import React, {Component} from "react";


 class ContactForm extends Component {
    state = { 
        name: '',
        number: ''};

    handleInputChange = e=> {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value})
    };

    handleSubmit =e => {
        e.preventDefault();
        const { name } = this.state;
        const { onSubmit, contacts } = this.props;
        // const recurringContact = contacts.map(contact => contact.name);

        // if (recurringContact.includes(name)) {
        //   alert(`${name} is already in contacts`);
        //   return;
        // }

        onSubmit(this.state);
        this.reset();
    }

    reset=()=>{
        this.setState({
            name: '',
            number:''})
    }

    render() {
        return (   
        <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value = {this.state.name}
                onChange = {this.handleInputChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                value = {this.state.number}
                onChange={this.handleInputChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </label>
            <button type='submit' >
                        Add contact                           
             </button>
          </form>  );
        }
    }


//  class ContactForm extends Component {
//     state = { 
//         name: '',
//         number: ''};

// handleChange = e=> {

//     const {name, value} = e.currentTarget;
//     this.setState({[name]: value})
// };

// reset = () => {
//     this.setState({name: '', number: ''})
// }

// handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.name);
//     this.props.onSubmit(this.state.number);

//     this.reset()
// };

//   render(){
//     return(
//         <form onSubmit = {this.handleSubmit}>
//             <label >
//                 Name
//                 <input  
//                     type="text"
//                     name='name'
//                     value={this.state.name}
//                     onChange = {this.handleChange}
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                     required>
//                 </input>
//             </label>
//             <label>
//                 Number
//                 <input
//                     type="tel"
//                     name='number'
//                     value={this.state.number}
//                     onChange = {this.handleChange}
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                     required
//                     />
//             </label>
//             <button type='submit' >
//                 Add contact
//             </button>
//         </form>
//     )
//   }  
//  }

export default ContactForm;