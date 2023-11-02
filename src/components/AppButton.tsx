import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, SPACING } from '../theme';

type Props = {
  buttonText: string;
};

export const AppButton: React.FC<Props> = ({ buttonText }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && [{ opacity: 0.8 }]]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: SPACING.spacing10,
    paddingVertical: SPACING.spacing10,
    backgroundColor: COLORS.colorYaleBlue,
    borderRadius: SPACING.spacing10,
    marginVertical: SPACING.spacing10,
  },
  buttonText: {
    color: COLORS.colorWhite,
    textAlign: 'center',
  },
});
