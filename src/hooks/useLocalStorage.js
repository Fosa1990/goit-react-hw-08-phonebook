import { useState, useEffect } from 'react';
export default function useLocalStorage(key, defaultValue) {
  const serialize = JSON.stringify;
  const deserialize = JSON.parse;
  const [state, setState] = useState(() => {
    return deserialize(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
    const localStorageArrayLength = deserialize(
      window.localStorage.getItem(key).length === 0,
    );
    if (localStorageArrayLength) setState(defaultValue);
  }, [key, defaultValue, serialize, deserialize, state]);
  return [state, setState];
}
