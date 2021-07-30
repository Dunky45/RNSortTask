import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btn_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;