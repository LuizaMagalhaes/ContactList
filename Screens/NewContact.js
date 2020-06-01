import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import InputContact from '../components/InputContact';
import { useDispatch, useSelector } from 'react-redux';
import * as contactActions from '../store/contact-actions';

const NewContact = (props) => {
  const dispatch = useDispatch();
  const contact = useSelector(estado => estado.contact.contact);

  const addContact = (nome, celular, foto, lat, lng) => {
    var lastId = 8;
    contact.forEach((item) => {
      if (item.id > lastId) {
        lastId = item.id;
      }
    })

    dispatch(contactActions.addContato(parseInt(lastId) + 2, nome, celular, foto, lat, lng, (new Date).toLocaleString()));
    props.navigation.goBack();
  }

  return (
    <ScrollView>
      <View>
        <InputContact onAddContact={addContact} isEditing={false} />
      </View>
    </ScrollView>
  )
};

const estilos = StyleSheet.create({
});

NewContact.navigationOptions = dadosNav => {
  return {
    headerTitle: "Cadastrar contato"
  }
}

export default NewContact;
