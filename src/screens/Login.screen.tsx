import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormInput } from '../components/FormInput';
import { SPACING } from '../theme';

export const Login = () => {
  const [val, setVal] = useState('');

  const handleChange = useCallback(
    (text: string) => {
      setVal(text);
      console.log(val);
    },
    [val],
  );

  return (
    <View>
      <FormInput
        placeholder="whatever"
        value={val}
        onChangeText={text => handleChange(text)}
        secureTextEntry={false}
        keyboardType="default"
        customStyle={styles.customInputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customInputStyle: {
    textAlign: 'center',
    marginVertical: SPACING.spacing10,
  },
});
