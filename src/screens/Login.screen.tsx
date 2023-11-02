import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormInput } from '../components/FormInput';
import { AppButton } from '../components/AppButton';
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
    <View style={styles.container}>
      <FormInput
        placeholder="Email"
        value={val}
        onChangeText={text => handleChange(text)}
        secureTextEntry={false}
        keyboardType="email-address"
        customStyle={styles.customInputStyle}
      />
      <FormInput
        placeholder="Password"
        value={val}
        onChangeText={text => handleChange(text)}
        secureTextEntry={true}
        keyboardType="default"
        customStyle={styles.customInputStyle}
      />
      <AppButton buttonText="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '10%',
  },
  customInputStyle: {
    textAlign: 'center',
    marginVertical: SPACING.spacing10,
  },
});
