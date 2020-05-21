import { ADD_CONTACT } from './ContactAction';
import Contact from '../Models/Contact';

const inicialState = {
  contacts: []
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const contact = new Contact(action.contact.id, action.contact.nome, action.contact.fone, action.contact.imagem);
      console.log("@contact reducer", JSON.stringify(contact))
      return {
        contacts: state.contacts.concat(contact)
      };
    default:
      return state;
  }
}
