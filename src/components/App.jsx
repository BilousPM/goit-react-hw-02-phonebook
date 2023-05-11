// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {

  state = {
    contacts: [],
    name: ''
  };

  // model.id = nanoid();
 
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Phonebook</h1>
        <form className=''>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button>Add contact</button>
        </form>
          <h2>Contacts</h2>
          <ul>
            <li></li>
          </ul>
      </div>
    );
  }
};

export default App;