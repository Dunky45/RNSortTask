const url =
  'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master';

export const get = async path => {
  try {
    const response = await fetch(`${url}${path}`);
    const json = await response.json();
    return json;
  } catch (error) {
    return parseError(error);
  }
};

const parseError = error => {
  return {
    error: true,
    message: error.message,
  };
};
