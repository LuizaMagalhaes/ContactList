export const ADD_CONTACT = 'ADD_CONTACT';
export const LIST_CONTACTS = 'LIST_CONTACTS';

export const listContacts = () => {
  return async dispatch => {
    try {
      dispatch({ type: LIST_CONTACTS, contatos: resultadoDB.rows._array });

    }
    catch (err) {
      console.log(err);
      throw err;
    }
  }
}



export const createContact = (id, nome, fone, imagem) => {
  console.log("passou aqui");
  return { type: ADD_CONTACT, contact: { id: id, nome: nome, fone: fone, imagem: imagem } }
}