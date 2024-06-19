import { useFonts } from "expo-font";
import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ForgotPassword = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Metropolis-Bold': require('../assets/font/Metropolis-Bold.otf'),
    'Metropolis-Medium': require('../assets/font/Metropolis-Medium.otf'),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Font tidak ditemukan!</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontFamily:'Metropolis-Bold'}]}>Forgot Password</Text>
    
    <Text style={[styles.instruction, {fontFamily:'Metropolis-Medium'}]}>Please, enter your email address. You will receive a link to create a new password via email.</Text>

    <TextInput 
      style={[styles.input, {fontFamily:'Metropolis-Medium'}]}
      placeholder="Email" />

    <Text style={[styles.warning, {fontFamily:'Metropolis-Medium'}]}>Not a valid email address. Should be your@email.com</Text>
    
    <TouchableOpacity 
      style={styles.button}
      onPress={() => Alert.alert('Send')}>
      <Text style={[styles.buttonText, {fontFamily:'Metropolis-Medium'}]}>SEND</Text>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  

  text: {
    fontSize: 35,
    marginTop: 50,
    alignSelf: 'flex-start',
    marginBottom: 70,
  },

  instruction: {
    fontSize: 14,
    textAlign: 'auto',
    marginBottom: 10,
    marginTop: 20,
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
    fontSize: 12,
    color : 'red',
    textAlign: 'center',
    marginTop: 10,
  },

  button: {
    backgroundColor: '#f44336',
    borderRadius:50,
    paddingVertical:20,
    marginTop: 55,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default ForgotPassword;
