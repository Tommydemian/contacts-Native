import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  buttonText: string;
};

export const AppButton: React.FC<Props> = ({ buttonText }) => {
  return (
    <Pressable>
      <Text>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {},
  buttonText: {},
});
