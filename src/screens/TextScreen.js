import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  textDisplay: {
    fontSize: 15,
  },
});

const TextScreen = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (val) => {
    if (val.length < 5) {
      setError('Password should at least be 5 characters');
    } else {
      setError('');
    }

    return setName(val);
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder='Type your name here...'
        value={name}
        onChangeText={(val) => handleChange(val)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View>
        <Text style={styles.textDisplay}>{error}</Text>
      </View>
    </View>
  );
};

export default TextScreen;
