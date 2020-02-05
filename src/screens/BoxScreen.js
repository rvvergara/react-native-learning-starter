import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  childStyle: {
    width: 100,
    height: 100,
  },
  childOneStyle: {
    backgroundColor: 'green',
  },
  childTwoStyle: {
    backgroundColor: 'blue',
    alignSelf: 'flex-end',
  },
  childThreeStyle: {
    backgroundColor: 'orange',
  },
});

const BoxScreen = () => (
  <View style={styles.parentStyle}>
    <View
      style={{ ...styles.childStyle, ...styles.childOneStyle }}
    />
    <View
      style={{ ...styles.childStyle, ...styles.childTwoStyle }}
    />
    <View
      style={{ ...styles.childStyle, ...styles.childThreeStyle }}
    />
  </View>
);

export default BoxScreen;
