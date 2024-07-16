import React, { useState } from 'react';
import { Button, Slider, StyleSheet, Text, View } from 'react-native';

export default function FiltersScreen() {
  const [price, setPrice] = useState(50);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Price range</Text>
      <Slider
        value={price}
        onValueChange={(value) => setPrice(value)}
        maximumValue={200}
        minimumValue={0}
        step={1}
        style={styles.slider}
      />
      <View style={styles.row}>
        <Text>0</Text>
        <Text>200</Text>
      </View>

      <Text style={styles.label}>Colors</Text>
      {/* Add color selection components here */}

      <Text style={styles.label}>Sizes</Text>
      {/* Add size selection components here */}

      <Text style={styles.label}>Category</Text>
      {/* Add category selection components here */}

      <Text style={styles.label}>Brand</Text>
      {/* Add brand selection components here */}

      <View style={styles.buttonContainer}>
        <Button title="Discard" onPress={() => {}} />
        <Button title="Apply" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
