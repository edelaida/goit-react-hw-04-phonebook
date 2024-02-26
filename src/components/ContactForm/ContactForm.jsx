import React from 'react';
import s from './ContactForm.module.css';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    return { name: name, number: number };
  };

  // const reset = () => {
  //   return { name: '', number: '' };
  // };

  return (
    <div className={s.block}>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          value={name}
          type="text"
          name="name"
          onChange={handleChange}
          required
        />
        <p>Number</p>
        <input
          value={number}
          type="tel"
          name="number"
          onChange={handleChange}
        />
        <br />
        <button className={s.btnAdd} type="submit">
          add contact
        </button>
      </form>
    </div>
  );
};

// export class ContactForm extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
// <div className={s.block}>
//   <h1>Phonebook</h1>
//   <form onSubmit={this.handleSubmit}>
//     <p>Name</p>
//     <input
//       value={name}
//       type="text"
//       name="name"
//       onChange={this.handleChange}
//       required
//     />
//     <p>Number</p>
//     <input
//       value={number}
//       type="tel"
//       name="number"
//       onChange={this.handleChange}
//     />
//     <br />
//     <button className={s.btnAdd} type="submit">
//       add contact
//     </button>
//   </form>
// </div>
//     );
//   }
// }
