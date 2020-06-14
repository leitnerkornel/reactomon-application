export const getPokemonIdFromUrl = (url) => {
  let urlArray = url.split('/');
  return parseInt(urlArray[urlArray.length - 2]);
};
