import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ForgotPassword = (navigation) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgot Password</Text>
    
    <Text style={styles.instruction}>Please, enter your email address. You will receive a link to create a new password via email.</Text>

    <TextInput 
      style={styles.input}
      placeholder="Email" />

    <Text style={styles.warning}>Not a valid email address. Should be your@email.com</Text>
    
    <TouchableOpacity 
      style={styles.button}
      onPress={() => Alert.alert('Send')}>
      <Text style={styles.buttonText}>SEND</Text>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 30,
    backgroundColor: '#F5FCFF',
  },
  

  text: {
    fontSize: 55,
    marginTop: 130,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 140,
  },

  instruction: {
    fontSize: 23,
    textAlign: 'auto',
    marginBottom: 10,
  },

  input: {
    height: 70,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 25,
    width: '100%',
    borderRadius: 10,
  },

  warning: {
    fontSize: 17,
    color : 'red',
    textAlign: 'center',
    marginTop: 3,
  },

  button: {
    backgroundColor: '#f44336',
    borderRadius:50,
    paddingVertical:20,
    marginTop: 80,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
