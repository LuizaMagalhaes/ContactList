import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Alert, TouchableOpacity, Text } from 'react-native';
import ContactItem from './components/ContactItem';
import Card from './components/Card';
import Variables from './Variables/Variables';
import InputContact from './components/InputContact';

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: Variables.large
  },
  card: {
    margin: Variables.large
  }
});

export default function App() {
  const [contacts, setContacts] = useState('');
  const [contadorContacts, setContadorcontacts] = useState(10);
  const [visualizedContact, setVisualizedContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const removeContact = (keyToRemove) => {
    Alert.alert(
      'Deseja remover o contato ' + keyToRemove + '?',
      '',
      [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          onPress: () => {
            setContacts(contacts => {
              return contacts.filter((contact) => {
                return contact.key !== keyToRemove
              })
            });
          }
        }
      ]
    )
  };

  const viewContact = (contact) => {
    setVisualizedContact(contact);
  };

  const addContact = (nome, celular) => {
    setContacts((contacts) => {
      setContadorcontacts(contadorContacts + 2);
      return [
        ...contacts,
        {
          key: contadorContacts.toString(),
          nome: nome,
          celular: celular
        }
      ];
    });
  }


  const editContact = (nome, celular) => {
    var currentContacts = contacts;
    var newItem = false;

    currentContacts.forEach((item) => {
      if (item.key == visualizedContact.key) {
        item.nome = nome
        item.celular = celular

        newItem = item;
      }
    })
    setIsEditing(false);
    setVisualizedContact(null);
  }

  return (
    <View>
      {visualizedContact ? (
        <View style={styles.telaPrincipalView}>
          <TouchableOpacity onPress={() => {
            setIsEditing(false)
            setVisualizedContact(null)
          }}>
            <View>
              <Text>Voltar para a lista de contatos</Text>
            </View>
          </TouchableOpacity>
          {isEditing ? (
            <View>
              <InputContact onAddContact={editContact} isEditing={true} />
            </View>
          ) : (<View></View>)}
          <Card styles={styles.contactItem}>
            <ContactItem
              contact={visualizedContact}
              onPress={viewContact}
              onDelete={removeContact}
            />
          </Card>
          <TouchableOpacity onPress={() => { setIsEditing(true) }}>
            <View>
              <Text>Editar</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
          <View style={styles.telaPrincipalView}>
            <View>
              <InputContact onAddContact={addContact} isEditing={false} />
            </View>
            <FlatList
              data={contacts}
              renderItem={
                contact => (
                  <Card styles={styles.contactItem}>
                    <ContactItem
                      contact={contact.item}
                      onPress={viewContact}
                      onDelete={removeContact}
                    />
                  </Card>
                )
              }
            />
          </View>
        )}
    </View>
  );
}
