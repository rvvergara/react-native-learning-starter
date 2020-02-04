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

const ColorChanger = ({ setColor, colorName, color }) => (
  <View>
    <View style={styles.buttonView}>
      <Button
        title={`More ${colorName}`}
        style={{ backgroundColor: colorName }}
        onPress={() => {
          if (color < 255 + 10) {
            setColor(color + 10);
          }
        }}
      />
    </View>
    <View style={styles.buttonView}>
      <Button
        title={`Less ${colorName}`}
        onPress={() => {
          if (color > 10) {
            setColor(color - 10);
          }
        }}
        style={{ backgroundColor: colorName }}
      />
    </View>
  </View>
);

export default ColorChanger;
