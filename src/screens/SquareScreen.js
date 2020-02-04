import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorChanger from '../components/ColorChanger';

const styles = StyleSheet.create({
  colorBox: {
    height: 100,
    width: 100,
    marginHorizontal: 30,
    marginVertical: 10,
  },
});

const SquareScreen = () => {
  const randomNumberSetter = () => Math.floor(Math.random() * 256);
  const [red, setRed] = useState(randomNumberSetter());
  const [green, setGreen] = useState(randomNumberSetter());
  const [blue, setBlue] = useState(randomNumberSetter());
  return (
    <View>
      <Text>Square Screen</Text>
      <ColorChanger
        setColor={setRed}
        color={red}
        colorName='red'
      />
      <ColorChanger
        setColor={setGreen}
        color={green}
        colorName='green'
      />
      <ColorChanger
        setColor={setBlue}
        color={blue}
        colorName='blue'
      />
      <View
        style={{ ...styles.colorBox, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      />
    </View>
  );
};

export default SquareScreen;
