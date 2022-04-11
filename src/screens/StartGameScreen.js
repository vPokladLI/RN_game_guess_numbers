//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Start game screen</Text>
      <TextInput />
      <PrimaryButton>Submit</PrimaryButton>
      <PrimaryButton>Reset</PrimaryButton>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

//make this component available to the app
export default MyComponent;
