import React, { useReducer } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import ColorChanger from '../components/ColorChanger';

const styles = StyleSheet.create({
  colorBox: {
    height: 100,
    width: 100,
    marginHorizontal: 30,
    marginVertical: 10,
  },
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'red':
      return state.red + action.increment < 255 && state.red + action.increment > 0
        ? { ...state, red: state.red + action.increment }
        : state;
    case 'green':
      return state.green + action.increment < 255 && state.green + action.increment > 0
        ? { ...state, green: state.green + action.increment }
        : state;
    case 'blue':
      return state.blue + action.increment < 255 && state.blue + action.increment > 0
        ? { ...state, blue: state.blue + action.increment }
        : state;
    default:
      return state;
  }
};

const SquareScreen = () => {
  const randomNumberSetter = () => Math.floor(Math.random() * 256);

  const initialState = {
    red: randomNumberSetter(),
    green: randomNumberSetter(),
    blue: randomNumberSetter(),
  };

  const [color, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = color;
  return (
    <View>
      <Text>Square Screen</Text>
      <ColorChanger
        dispatch={dispatch}
        type='red'
      />
      <ColorChanger
        dispatch={dispatch}
        type='green'
      />
      <ColorChanger
        dispatch={dispatch}
        type='blue'
      />
      <View
        style={{ ...styles.colorBox, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      />
    </View>
  );
};

export default SquareScreen;
