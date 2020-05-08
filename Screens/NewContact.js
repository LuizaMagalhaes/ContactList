import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import HeaderBtn from '../components/HeaderBtn'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import InputContact from '../components/InputContact';

const NewContact = (props) => {
  return (
    <ScrollView>
      <View>
        <InputContact onAddContact={props.addContact} isEditing={true} />
      </View>
    </ScrollView>
  )
};

NewContact.navigationOptions = dataNav => {
  return {
    headerTitle: "Adicionar novo contato",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="Adicionar"
          iconName={Platform.OS === 'ios' ? 'md-add' : 'ios-add'}
          onPress={() => { dataNav.navigation.navigate("NewContact") }}
        />
      </HeaderButtons>
    )
  }
}

export default NewContact;
