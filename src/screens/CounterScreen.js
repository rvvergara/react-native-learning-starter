import React, { useReducer } from 'react';
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

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [count, dispatch] = useReducer(reducer, 0);
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
          onPress={() => dispatch({ type: 'INCREMENT' })}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          title='Subtract'
          onPress={() => dispatch({ type: 'DECREMENT' })}
        />
      </View>
    </View>
  );
};

export default CounterScreen;
