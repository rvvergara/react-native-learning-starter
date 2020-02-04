import React, { useState } from 'react';
import {
  Text, StyleSheet, View, Button,
} from 'react-native';

const styles = StyleSheet.create({
  buttonView: {
    width: '50%',
    marginHorizontal: '30%',
    marginVertical: 10,
  },
  count: {
    fontSize: 20,
  },
});

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={styles.count}>
        Current Count:
        {' '}
        {count }
        {' '}
      </Text>
      <View style={styles.buttonView}>
        <Button
          title='Add'
          onPress={() => setCount(count + 1)}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title='Subtract'
          onPress={() => setCount(count - 1)}
        />
      </View>
    </View>
  );
};

export default CounterScreen;
