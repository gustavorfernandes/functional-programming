import useCounter from './hooks/useCounter';

import { Counter } from './components/counter';
import { DecrementButton } from './components/decrement-button';
import { IncrementButton } from './components/increment-button';

export default function PureFunctionalComponent() {
  const { count, handleIncrement, handleDecrement } = useCounter();

  return (
    <div>
      <Counter
        count={count}
        increment={<IncrementButton handleClick={handleIncrement} />}
        decrement={<DecrementButton handleClick={handleDecrement} />}
      />
    </div>
  );
}
