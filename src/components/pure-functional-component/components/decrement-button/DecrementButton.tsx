import { memo } from 'react';

const DecrementButton = memo(({ handleClick }: { handleClick: () => void }) => {
  return <button onClick={handleClick}>-</button>;
});

export default DecrementButton;
