import React from 'react';
import {View} from 'react-native';

const Container = ({children}) => {
  return <View style={{flex: 1, paddingHorizontal: 15}}>{children}</View>;
};

export default Container;
