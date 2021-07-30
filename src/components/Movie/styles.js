import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  movie: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
  },
  movie_content: {
    flex: 1,
    paddingLeft: 15,
  },
  movie_name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  movie_episode: {
    fontSize: 16,
    marginTop: 'auto',
  },
});
