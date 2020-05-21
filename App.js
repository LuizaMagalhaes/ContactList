import React from 'react';
import ContactsNavigator from './Navigation/ContactsNavigator'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import ContatoReducer from './Store/ContatoReducer';


const rootReducer = combineReducers({
  contatos: ContatoReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<Provider store={store}>
      <ContactsNavigator />
    </Provider>
    );
  }
}
export default App;