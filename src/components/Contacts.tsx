import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FormInput } from '../components/FormInput';

import { COLORS, SPACING } from '../theme';

export const Contacts = () => {
  const [val, setVal] = useState('');

  const handleChange = useCallback(
    (text: string) => {
      setVal(text);
      console.log(val);
    },
    [val],
  );

  return (
    <ScrollView style={{ backgroundColor: COLORS.colorWhite }}>
      <View style={styles.contactsWrapper}>
        <Text>Contacts</Text>
        <FormInput
          placeholder="whatever"
          value={val}
          onChangeText={text => handleChange(text)}
          secureTextEntry={false}
          keyboardType="default"
          customStyle={styles.customInputStyle}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contactsWrapper: {
    padding: SPACING.spacing20,
  },
  customInputStyle: {
    textAlign: 'center',
    marginVertical: SPACING.spacing10,
  },
});
