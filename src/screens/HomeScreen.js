import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonView: {
    marginVertical: 20,
    display: 'flex'
  }
});

export default HomeScreen;
