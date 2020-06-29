/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Form from './Form';

const App: () => React$Node = () => {
  return (
    <View>
      <Text style={styles.title}>Todo List</Text>
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingTop: 60,
    textAlign: 'center',
    fontSize: 60,
  },
});

export default App;
