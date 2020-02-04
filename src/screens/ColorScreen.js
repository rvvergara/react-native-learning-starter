import React, { useState } from 'react';
import {
  Text, View, Button, StyleSheet, FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  colorBox: {
    width: 100,
    height: 100,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const randomRGBGenerator = () => Math.floor(Math.random() * 256);

  const randomColorGenerator = () => {
    const red = randomRGBGenerator();
    const green = randomRGBGenerator();
    const blue = randomRGBGenerator();
    return [...colors, `rgb(${red}, ${green}, ${blue})`];
  };
  return (
    <View>
      <Text>Random Colors</Text>
      <Button
        title="Add New Color"
        onPress={() => setColors(randomColorGenerator())}
      />
      <FlatList
        data={colors}
        keyExtractor={(color) => color}
        renderItem={(color) => (
          <View style={{
            ...styles.colorBox,
            backgroundColor: color.item,
          }}
          />
        )}
      />
    </View>
  );
};

export default ColorScreen;
