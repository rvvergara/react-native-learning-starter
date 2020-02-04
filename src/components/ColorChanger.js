import React from 'react';
import {
  View, Button, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  buttonView: {
    width: 150,
    height: 70,
  },
});

const ColorChanger = ({ dispatch, type }) => (
  <View>
    <View style={styles.buttonView}>
      <Button
        title={`More ${type}`}
        style={{ backgroundColor: type }}
        onPress={() => dispatch({
          type,
          increment: 10,
        })}
      />
    </View>
    <View style={styles.buttonView}>
      <Button
        title={`Less ${type}`}
        onPress={() => dispatch({
          type,
          increment: -10,
        })}
        style={{ backgroundColor: type }}
      />
    </View>
  </View>
);

export default ColorChanger;
