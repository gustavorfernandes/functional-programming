import { Link } from 'react-router-dom';

import { Counter } from './components/counter';
import { DecrementButton } from './components/decrement-button';
import { IncrementButton } from './components/increment-button';

import useCounter from './hooks/useCounter';

export default function PureFunctionalComponent() {
  const { count, handleIncrement, handleDecrement } = useCounter();

  return (
    <div>
      <Counter
        count={count}
        increment={<IncrementButton handleClick={handleIncrement} />}
        decrement={<DecrementButton handleClick={handleDecrement} />}
      />

      <Link to="/">Back</Link>
    </div>
  );
}
