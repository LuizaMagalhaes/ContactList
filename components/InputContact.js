import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native'
import Variables from '../Variables/Variables.js'

const InputContact = (props) => {
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');

  const capturarNome = (nome) => {
    setNome(nome)
  };

  const capturarCelular = (celular) => {
    setCelular(celular)
  };

  return (
    <View>
      <View style={styles.contactView}>
        <TextInput
          placeholder="Nome"
          style={styles.nomeInputText}
          onChangeText={capturarNome}
          value={nome}
        />
      </View>
      <View style={styles.contactView}>
        <TextInput
          placeholder="Telefone"
          style={styles.telefoneInputText}
          onChangeText={capturarCelular}
          value={celular}
        />
        <Button
          title={props.isEditing ? "salvar" : '+'}
          onPress={() => {
            props.onAddContact(nome, celular)

            if (!props.isEditing) {
              setNome('');
              setCelular('');
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Variables.small
  },
  nomeInputText: {
    width: '80%',
    borderBottomColor: Variables.moon900,
    borderBottomWidth: Variables.verySmall,
    padding: Variables.small,
    marginBottom: 20
  },
  telefoneInputText: {
    width: '80%',
    borderBottomColor: Variables.moon900,
    borderBottomWidth: Variables.verySmall,
    padding: Variables.small,
    marginBottom: Variables.medium
  }
});

export default InputContact;