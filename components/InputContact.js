import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native'
import Variables from '../Variables/Variables.js'

const InputContact = (props) => {
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');
  const [imagemURI, setImagemURI] = useState();

  const capturarNome = (nome) => {
    setNome(nome)
  };

  const capturarCelular = (celular) => {
    setCelular(celular)
  };

  const [imagemURI, setImagemURI] = useState();

  const photoTaken = imagemURI => {
    setImagemURI(imagemURI);
  }

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
      </View>
      <View style={styles.contactView}>
        <TiraFoto onPhotoTaken={photoTaken} />
      </View>
      <View style={styles.contactView}>
        <Button
          title={'Adicionar'}
          onPress={() => {
            props.onAddContact(nome, celular, imagemURI)
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
  },
  imagem: {
    width: 200,
    height: 200,
    backgroundColor: '#ccc'
  }
});

export default InputContact;