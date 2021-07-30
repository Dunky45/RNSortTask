export const sortMovies = (movies, sortAsc) =>
  movies.sort((a, b) =>
    a.episode_number > b.episode_number
      ? sortAsc
        ? 1
        : -1
      : b.episode_number > a.episode_number
      ? sortAsc
        ? -1
        : 1
      : 0,
  );
