import React from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
    
    <TextInput 
      style={styles.input} 
      placeholder="Name"/>
      
    <TextInput 
      style={styles.input} 
      placeholder="Email" 
      keyboardType="email-address"/>

    <TextInput 
      style={styles.input} 
      placeholder="Password" 
      secureTextEntry/>

    <Text style={styles.loginPrompt}>Already have an account? <Image
          source={require('../assets/image3.png')} 
          style={styles.iconImage3}/> </Text>
    
    <TouchableOpacity 
      style={styles.button}
      onPress={() => Alert.alert('Sign Up')}>
      <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>
    
    <Text style={styles.socialText}>Or sign up with social account</Text>
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
    padding: 30,
    backgroundColor: '#F5FCFF',
  },
  

  text: {
    fontSize: 55,
    marginTop: 130,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 100,
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

  loginPrompt: {
    fontSize: 24,
    alignSelf: 'flex-end',
    paddingVertical: 10,
    marginTop: 10,
    fontWeight: 'bold',
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
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  socialText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100,
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
