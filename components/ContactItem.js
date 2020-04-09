import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Variables from '../Variables/Variables'

const ContactItem = (props) => {
  return (
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}>
      <View style={styles.itemNaLista}>
        <Text>#{props.chave}</Text>
        <Text>Nome: {props.nome}</Text>
        <Text>Telefone: {props.celular}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemNaLista: {
    padding: Variables.small,
    backgroundColor: Variables.moon100,
    borderColor: Variables.moon400,
    borderWidth: Variables.verySmall,
    marginBottom: Variables.medium,
    borderRadius: Variables.medium,
  }
});

export default ContactItem;