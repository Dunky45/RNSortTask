import React from 'react';
import {SafeAreaView} from 'react-native';
import MoviesView from './src/containers/Movies/MoviesView';
import variables from './src/styles/variables';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: variables.white, flex: 1}}>
      <MoviesView />
    </SafeAreaView>
  );
};

export default App;
