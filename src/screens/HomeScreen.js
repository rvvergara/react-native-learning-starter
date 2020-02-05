import React from 'react';
import {
  Text, StyleSheet, View, Button,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonView: {
    marginVertical: 20,
    display: 'flex',
  },
});

const HomeScreen = ({ navigation }) => (
  <View>
    <Text style={styles.text}>Hello World!</Text>
    <View style={styles.buttonView}>
      <Button
        title='Go To Components Demo'
        onPress={() => navigation.navigate('Components')}
      />
    </View>
    <View style={styles.buttonView}>
      <Button
        title='Go To List Demo'
        onPress={() => navigation.navigate('List')}
      />
    </View>
    <View
      style={styles.buttonView}
    >
      <Button
        title='Go To Image Demo'
        onPress={() => navigation.navigate('Image')}
      />
    </View>
    <View
      style={styles.buttonView}
    >
      <Button
        title='Go To Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
    <View
      style={styles.buttonView}
    >
      <Button
        title='Go To Color Demo'
        onPress={() => navigation.navigate('Color')}
      />
    </View>
    <View
      style={styles.buttonView}
    >
      <Button
        title='Go To Square Demo'
        onPress={() => navigation.navigate('Square')}
      />
    </View>
    <View
      style={styles.buttonView}
    >
      <Button
        title='Go To Text Input Demo'
        onPress={() => navigation.navigate('Text')}
      />
    </View>
  </View>
);

export default HomeScreen;
