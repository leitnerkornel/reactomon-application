export const getPokemonIdFromUrl = (url) => {
  let urlArray = url.split('/');
  return parseInt(urlArray[urlArray.length - 2]);
};

export const getPokemonIdFromWindowUrl = () => {
  let urlFragments = window.location.href.split('/');
  return urlFragments[urlFragments.length - 1];
};

export const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
