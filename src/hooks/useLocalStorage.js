import { useState, useEffect } from 'react';

const useLocalStorage = (
  key,
  defaultValue,
  serialize = JSON.stringify,
  deserialize = JSON.parse
) => {
  const [state, setState] = useState(() => {
    try {
      return deserialize(window.localStorage.getItem(key)) ?? defaultValue;
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
};

export { useLocalStorage };
