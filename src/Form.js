import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Form = () => {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Write To do!" />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  form: {
    marginTop: 50,
    marginHorizontal: 40,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
