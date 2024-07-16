import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function VisualSearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.topButtonContainer}>
          <Image source={require('../assets/image4.png')} style={styles.pindahalaman} />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Visual search</Text>
        </View>
      </View>

      <ImageBackground source={require('../assets/baju1.jpeg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.subtitle}>Search for an outfit by taking a photo or uploading an image</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Photo')}>
            <Text style={styles.buttonText}>TAKE A PHOTO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Photo')}>
            <Text style={styles.buttonTextOutline}>UPLOAD AN IMAGE</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, 
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },

  topButtonContainer: {
    position: 'absolute',
    left: 10,
  },

  pindahalaman: {
    width: 30,
    height: 20,
  },

  textContainer: {
    alignItems: 'center',
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  
  subtitle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'left',
    marginBottom: 20,
    padding : 15,
  },

  button: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

  buttonOutline: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },

  buttonTextOutline: {
    color: 'white',
    fontSize: 16,
  },
});
