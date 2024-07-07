import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ForgetPassword = () => {
  const [formForgetPassword, setForm] = useState({
    email: ''
  });
  
  const [emailValid, setEmailValid] = useState(true);

  const navigation = useNavigation();

  const onSubmit = () => {
    if (formForgetPassword.email.toLowerCase() === '105841102421@studet.unismuh.ac.id') {
      alert('Periksa Email Anda');
      navigation.navigate('Login');
    } else {
      setEmailValid(false);
    }
  };

  const [fontsLoaded] = useFonts({
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
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.topButtonContainer}>
        <Image source={require('../assets/image4.png')} style={styles.pindahalaman} />
      </TouchableOpacity>
    
      <Text style={[styles.text, { fontFamily: 'Metropolis-Bold' }]}>Forgot Password</Text>
    
      <Text style={[styles.instruction, { fontFamily: 'Metropolis-Medium' }]}>
        Please, enter your email address. You will receive a link to create a new password via email.
      </Text>

      <TextInput 
        style={[styles.input, { fontFamily: 'Metropolis-Medium' }]}
        placeholder="Email"
        onChangeText={(hasil) => {
          setForm({ email: hasil });
          setEmailValid(true);
        }}
        value={formForgetPassword.email}
      />

      {!emailValid && (
        <Text style={[styles.warning, { fontFamily: 'Metropolis-Medium' }]}>
          Not a valid email address. Should be your@email.com
        </Text>
      )}
    
      <TouchableOpacity 
        style={styles.button}
        onPress={onSubmit}>
        <Text style={[styles.buttonText, { fontFamily: 'Metropolis-Medium' }]}>SEND</Text>
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
  
  topButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 15,
  },

  pindahalaman: {
    width: 30,
    height: 20,
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
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },

  button: {
    backgroundColor: '#f44336',
    borderRadius: 50,
    paddingVertical: 20,
    marginTop: 55,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default ForgetPassword;
