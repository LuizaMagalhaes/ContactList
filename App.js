import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ContactItem from './components/ContactItem';
import Input from './components/InputContact';

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 80
  }
});

export default function App() {
  const [contatos, setContatos] = useState('');
  const [contadorContatos, setContadorcontatos] = useState(10);

  const removerContato = (keyToRemove) => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
        return contato.key !== keyToRemove
      })
    });
  };

  const adicionarContato = (nome, celular) => {
    setContatos((contatos) => {
      setContadorcontatos(contadorContatos + 2);
      return [
        ...contatos,
        {
          key: contadorContatos.toString(),
          nome: nome,
          celular: celular
        }
      ];
    });
  }

  return (
    <View style={styles.telaPrincipalView}>
      <View>
        <Input onAdicionarContato={adicionarContato} />
      </View>
      <FlatList
        data={contatos}
        renderItem={
          contato => (
            <ContactItem
              chave={contato.item.key}
              nome={contato.item.nome}
              celular={contato.item.celular}
              onDelete={removerContato}
            />
          )
        }
      />
    </View>
  );
}