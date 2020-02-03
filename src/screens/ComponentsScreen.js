import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'RyanV';
  return (
    <View
      style={styles.viewStyle}
    >
      <Text
        style={styles.bigText}
      >
        Getting started with react native!
      </Text>
      <Text
        style={styles.smallText}
      >
        My name is { name }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 45,
    color: '#fff'
  },
  smallText: {
    fontSize: 20,
    color: 'yellow'
  },
  viewStyle: {
    backgroundColor: 'green'
  }
});

export default ComponentsScreen;