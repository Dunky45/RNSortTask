import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const Movie = ({movie}) => {
  const {title, episode_number, poster} = movie;

  return (
    <View style={styles.movie}>
      <Image
        style={{height: 160, width: 100}}
        source={{
          uri: `https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/${poster}`,
        }}
      />
      <View style={styles.movie_content}>
        <Text style={styles.movie_name}>{title}</Text>
        <Text style={styles.movie_episode}>Episode: {episode_number}</Text>
      </View>
    </View>
  );
};

export default Movie;
