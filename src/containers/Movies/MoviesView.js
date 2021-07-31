import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {getMovies} from '../../services/moviesService';
import {sortMovies} from '../../helpers/moviesHelper';
//COMPONENTS
import Movie from '../../components/Movie';
//ELEMENTS
import Button from '../../elements/Button';
import Loader from '../../elements/Loader';
import Container from '../../elements/Container';

const MoviesView = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovies();
      if (!res.error) setMovies(res.movies);
    };
    fetchData();
  }, []);

  const [movies, setMovies] = useState(null);
  const [sortAsc, setSortAsc] = useState(false);

  const handleSort = () => {
    const sortedMovies = sortMovies(movies, sortAsc);
    setMovies(sortedMovies);
    setSortAsc(!sortAsc);
  };

  if (!movies) return <Loader />;

  return (
    <Container>
      <FlatList
        data={movies}
        renderItem={({item}) => <Movie movie={item} />}
        keyExtractor={(item, index) => index}
        style={{marginBottom: 15}}
      />
      <Button
        text={`Sort ${sortAsc ? 'ascending' : 'descending'}`}
        onPress={handleSort}
        style={{marginTop: 15}}
      />
    </Container>
  );
};

export default MoviesView;
