export const sortMovies = (movies, sortAsc) => {
  let sortedMovies = [...movies];
  sortedMovies = sortedMovies.sort((a, b) =>
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

  return sortedMovies;
};
