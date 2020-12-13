import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home';

const App = () => {
  return (
    <Provider 
      store={store}>
      <Home/>
    </Provider>
  );
};


export default App;
