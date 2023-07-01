import { useState } from 'react';

import { increment } from '../utils/increment';
import { decrement } from '../utils/decrement';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => setCount(increment(count));

  const handleDecrement = () => setCount(decrement(count));

  return { count, handleIncrement, handleDecrement };
};

export default useCounter;
