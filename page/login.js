import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {
  const [formLogin, setForm] = useState({
    email: '',
    password: ''
  });

  const navigation = useNavigation();

  const onSubmit = () => {
    if (formLogin.email.toLowerCase() === '105841102421@studet.unismuh.ac.id'
      && formLogin.password === 'teknikunismuh') {
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
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={styles.topButtonContainer}>
        <Image source={require('../assets/image4.png')} style={styles.pindahalaman} />
      </TouchableOpacity>

      <Text style={[styles.text, { fontFamily: 'Metropolis-Bold' }]}>Login</Text>

      <TextInput
        style={[styles.input, { fontFamily: 'Metropolis-Medium' }]}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(hasil) => setForm({ ...formLogin, email: hasil })}
        value={formLogin.email} />

      <TextInput
        style={[styles.input, { fontFamily: 'Metropolis-Medium' }]}
        placeholder="Password"
        secureTextEntry
        onChangeText={(hasil) => setForm({ ...formLogin, password: hasil })}
        value={formLogin.password} />

      <Text style={[styles.loginPrompt, { fontFamily: 'Metropolis-Medium' }]}>Forget your password?
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Image source={require('../assets/image3.png')} style={styles.iconImage3} />
        </TouchableOpacity>
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onSubmit}>
        <Text style={[styles.buttonText, { fontFamily: 'Metropolis-Medium' }]}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={[styles.socialText, { fontFamily: 'Metropolis-Medium' }]}>Or sign up with social account</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => Alert.alert()}>
          <Image
            source={require('../assets/image2.png')}
            style={styles.iconImage} />
        </TouchableOpacity>
        <Image
          source={require('../assets/image1.png')}
          style={styles.iconImage} />
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
    fontSize: 40,
    marginTop: 50,
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

  iconImage3: {
    width: 20,
    height: 10,
    alignSelf: 'flex-end',
  },

  button: {
    backgroundColor: '#f44336',
    borderRadius: 50,
    paddingVertical: 20,
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
    marginTop: 120,
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

export default Login;
