import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactItem = (props) => {
  return (
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}>
      <View style={styles.itemNaLista}>
        <Text>#{props.chave}</Text>
        <Text>Nome: {props.nome}</Text>
        <Text>Numero: {props.celular}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemNaLista: {
    padding: 12,
    backgroundColor: '#B8FCAE',
    borderColor: '#56b53f',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});

export default ContactItem;