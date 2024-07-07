import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUp = () => {
  const [formSingUp, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigation = useNavigation();

  const onSubmit = () => {
    if (formSingUp.username.toLowerCase() === 'magfiratuljannah'
      && formSingUp.email.toLowerCase() === '105841102421@studet.unismuh.ac.id'
      && formSingUp.password === 'teknikunismuh') {
      alert('Login Berhasil');
      navigation.navigate('MyProfile');
    } else {
      alert('Login Gagal');
    }
  };

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
      <Text style={[styles.text, {fontFamily:'Metropolis-Bold'}]}>Sign Up</Text>
      
      <TextInput 
        style={[styles.input, {fontFamily:'Metropolis-Medium'}]} 
        placeholder="Name"
        onChangeText={(hasil) => setForm({ ...formSingUp, username: hasil })}
        value={formSingUp.username}
      />

      <TextInput 
        style={[styles.input, {fontFamily:'Metropolis-Medium'}]} 
        placeholder="Email" 
        keyboardType="email-address"
        onChangeText={(hasil) => setForm({ ...formSingUp, email: hasil })}
        value={formSingUp.email}/>

      <TextInput 
        style={[styles.input, {fontFamily:'Metropolis-Medium'}]} 
        placeholder="Password" 
        secureTextEntry
        onChangeText={(hasil) => setForm({ ...formSingUp, password: hasil })}
        value={formSingUp.password}/>

      <Text style={[styles.loginPrompt, {fontFamily:'Metropolis-Medium'}]}> Already have an account? 
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image source={require('../assets/image3.png')} style={styles.iconImage3} />
        </TouchableOpacity>
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={onSubmit}>
        <Text style={[styles.buttonText, {fontFamily:'Metropolis-Medium'}]}>SIGN UP</Text>
      </TouchableOpacity>
      
      <Text style={[styles.socialText, {fontFamily:'Metropolis-Medium'}]}>Or sign up with social account</Text>
      <View style={styles.iconContainer}>
        
        <TouchableOpacity 
          onPress={() => Alert.alert()}>
          <Image
            source={require('../assets/image2.png')}
            style={styles.iconImage}/>
        </TouchableOpacity>
        <Image
          source={require('../assets/image1.png')}
          style={styles.iconImage}/>
        
      </View>
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
    fontSize: 40,
    marginTop: 50,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 70,
  },

  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 20,
    width: '100%',
  },

  loginPrompt: {
    fontSize: 12,
    alignSelf: 'flex-end',
    paddingVertical: 10,
    marginTop: 10,
  },

  iconImage3:{
    width: 20,
    height: 10,
    alignSelf: 'flex-end',
  },

  button: {
    backgroundColor: '#f44336',
    borderRadius:50,
    paddingVertical:20,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  
  socialText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 80,
  },

  iconContainer: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-evenly',
    width: '80%',
  },

  iconImage: {
    padding: 10,
    justifyContent: 'center',
    width: 40,
    height: 40,
  }
});

export default SignUp;
