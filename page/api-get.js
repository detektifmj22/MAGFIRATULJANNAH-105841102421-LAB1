import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MainPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('./assets/home1.jpeg')} style={styles.headerImage} />
        <Text style={styles.headerText}>Fashion sale</Text>
        <TouchableOpacity style={styles.checkButton}>
          <Text style={styles.checkButtonText}>Check</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newSection}>
        <Text style={styles.newHeader}>New</Text>
        <Text style={styles.viewAll}>View all</Text>
        <View style={styles.newItemsContainer}>
          <View style={styles.newItem}>
            <Image source={require('./assets/home2.jpeg')} style={styles.newItemImage} />
            <Text style={styles.newItemText}>Item 1</Text>
          </View>
          <View style={styles.newItem}>
            <Image source={require('./assets/home3.jpeg')} style={styles.newItemImage} />
            <Text style={styles.newItemText}>Item 2</Text>
          </View>
          <View style={styles.newItem}>
            <Image source={require('./assets/home4.jpeg')} style={styles.newItemImage} />
            <Text style={styles.newItemText}>Item 3</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 300,
  },
  headerText: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  checkButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#FF5252',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  newSection: {
    padding: 20,
  },
  newHeader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 16,
    color: '#FF5252',
    textAlign: 'right',
  },
  newItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  newItem: {
    alignItems: 'center',
  },
  newItemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  newItemText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default MainPage;
