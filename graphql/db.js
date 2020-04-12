export let movies = [
  {
    id: 1,
    name: 'Avengers: Endgame (Movie, 2019)',
    score: 10,
  },
  {
    id: 2,
    name: 'The God father (1972)',
    score: 8,
  },
  {
    id: 3,
    name: 'Frozen',
    score: 9,
  },
  {
    id: 4,
    name: 'Mission Impossible',
    score: 7,
  },
  {
    id: 5,
    name: 'Suicide Squad',
    score: 7,
  },
];

export const getMovies = () => movies;

export const getMovieById = (id) => {
  const filterMovie = movies.filter((movie) => movie.id === id);
  return filterMovie[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
