import {StyleSheet} from 'react-native';
import variables from '../../styles/variables';

export default StyleSheet.create({
  btn: {
    backgroundColor: variables.black,
    borderRadius: 6,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    color: variables.white,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
