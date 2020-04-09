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
      <View style={styles.contatoView}>
        <TextInput
          placeholder="Nome"
          style={styles.nomeInputText}
          onChangeText={capturarNome}
          value={nome}
        />
      </View>
      <View style={styles.contatoView}>
        <TextInput
          placeholder="Telefone"
          style={styles.telefoneInputText}
          onChangeText={capturarCelular}
          value={celular}
        />
        <Button
          title="+"
          onPress={() => {
            props.onAdicionarContato(nome, celular)

            setNome('');
            setCelular('');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contatoView: {
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