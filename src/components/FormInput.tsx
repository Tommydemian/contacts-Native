import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { COLORS, SPACING } from '../theme';

type Props = TextInputProps & {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  customStyle?: object;
  secureTextEntry: boolean;
  keyboardType: string;
  autoFocus?: boolean;
  autoCapitalize?: string;
  returnKeyType?: string;
};

export const FormInput = ({
  value,
  placeholder,
  onChangeText,
  customStyle,
  secureTextEntry,
  keyboardType,
  autoFocus,
  autoCapitalize,
  returnKeyType,
  ...rest
}: Props) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoFocus={autoFocus}
      autoCapitalize={autoCapitalize}
      returnKeyType={returnKeyType}
      style={[styles.textInput, customStyle]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: COLORS.colorGreyInput,
    paddingVertical: SPACING.spacing10,
    borderRadius: SPACING.spacing10,
    borderWidth: 1,
    borderColor: COLORS.colorGreyBorder,
  },
});
