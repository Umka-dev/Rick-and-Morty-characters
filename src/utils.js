export const fetcher = (url) => fetch(url).then((res) => res.json());

export const capitalFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const removeEmptyKeys = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value) {
      acc[key] = value;
    }
    return acc;
  }, {});
};
