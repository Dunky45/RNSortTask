import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {getMovies} from '../../services/moviesService';
import {sortMovies} from '../../helpers/moviesHelper';
//COMPONENTS
import Movie, {MovieTypes} from '../../components/Movie';
//ELEMENTS
import Button from '../../elements/Button';
import Loader from '../../elements/Loader';
import Container from '../../elements/Container';

const MoviesView: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovies();
      if (!res.error) setMovies(res.movies);
    };
    fetchData();
  }, []);

  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  const handleSort = () => {
    const sortedMovies: MovieTypes[] = sortMovies(movies, sortAsc);
    setMovies(sortedMovies);
    setSortAsc(!sortAsc);
  };

  if (movies.length < 1) return <Loader />;

  return (
    <Container>
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Movie movie={item} />}
        style={{marginBottom: 15}}
      />
      <Button
        text={`Sort ${sortAsc ? 'ascending' : 'descending'}`}
        onPress={handleSort}
      />
    </Container>
  );
};

export default MoviesView;
