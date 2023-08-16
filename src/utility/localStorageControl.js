import Cookies from 'js-cookie';

const getItem = (key) => {
  const data = Cookies.get(key);

  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

const setItem = (key, value) => {
  const stringify = typeof value !== 'string' ? JSON.stringify(value) : value;
  return Cookies.set(key, stringify);
};

const removeItem = (key) => {
  Cookies.remove(key);
};

export { getItem, setItem, removeItem };
