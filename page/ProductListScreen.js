import React, { useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const products = [
  // Add product data here
];

export default function ProductListScreen() {
  const [sortOption, setSortOption] = useState('Price: lowest to high');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Women's tops</Text>
        <View style={styles.sort}>
          <Text style={styles.sortText}>Sort by</Text>
          <Button title={sortOption} onPress={() => {}} />
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sort: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    marginRight: 10,
  },
  product: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});
