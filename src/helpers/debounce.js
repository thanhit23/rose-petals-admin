import { useState, useEffect } from 'react';

function debounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handle = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(handle);
  }, [value]);

  return debounceValue;
}

export default debounce;
