import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([
    {
      id: uuidv4(),
      name: 'Rosie Simpson',
      number: '459-12-56',
    },
    {
      id: uuidv4(),
      name: 'Hermione Kline',
      number: '443-89-12',
    },
    {
      id: uuidv4(),
      name: 'Eden Clements',
      number: '645-17-79',
    },
    {
      id: uuidv4(),
      name: 'Annie Copeland',
      number: '227-91-26',
    },
  ]);

  // const handleDelete = nameId => {
  //   prev => ({
  //        contacts: prev.contacts.filter(contact => contact.id !== nameId),
  //      })
  //   setContacts(prev) => ({
  //     contacts: prev.contacts.filter(contact => contact.id !== nameId),
  //   });
  //};

  const handleSubmitInput = data => {
    // contacts.some(elem => elem.name === data.name)
    //   ? alert(`${data.name} is alredy in contacts`):
    prev(prev => {
      return {
        contacts: [
          ...prev.contacts,
          {
            name: data.name,
            number: data.number,
            id: uuidv4(),
          },
        ],
      };
    });
  };

  const handleFilter = e => {
    ({ filter: e.target.value });
    console.log(e.target.value);
  };

  handleVisibleForm = () => {
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <ContactForm onSubmit={handleSubmitInput} />
      <Filter value={filter} onChange={handleFilter} />
      <ContactList list={filterPerson} onDeleteList={handleDelete} />
    </div>
  );
};

// export class App extends React.Component {
//   state = {
//     contacts: [
//       {
//         id: uuidv4(),
//         name: 'Rosie Simpson',
//         number: '459-12-56',
//       },
//       {
//         id: uuidv4(),
//         name: 'Hermione Kline',
//         number: '443-89-12',
//       },
//       {
//         id: uuidv4(),
//         name: 'Eden Clements',
//         number: '645-17-79',
//       },
//       {
//         id: uuidv4(),
//         name: 'Annie Copeland',
//         number: '227-91-26',
//       },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts?.length) {
//       this.setState({ contacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

// handleDelete = nameId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== nameId),
//   }));
// };

// handleSubmitInput = data => {
//   this.state.contacts.some(elem => elem.name === data.name)
//     ? alert(`${data.name} is alredy in contacts`)
//     : this.setState(prevState => {
//         return {
//           contacts: [
//             ...prevState.contacts,
//             {
//               name: data.name,
//               number: data.number,
//               id: uuidv4(),
//             },
//           ],
//         };
//       });
// };

// handleFilter = e => {
//   this.setState({ filter: e.target.value });
//   console.log(e.target.value);
// };

// handleVisibleForm = () => {
//   const { filter, contacts } = this.state;
//   return contacts.filter(contacts =>
//     contacts.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

//   render() {
//     const { filter } = this.state;
//     const filterPerson = this.handleVisibleForm();
//     return (
//       <div>
//         <ContactForm onSubmit={this.handleSubmitInput} />
//         <Filter value={filter} onChange={this.handleFilter} />
//         <ContactList list={filterPerson} onDeleteList={this.handleDelete} />
//       </div>
//     );
//   }
// }

// export default App;
