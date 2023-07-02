import { describe, it, expect } from 'vitest';

import { handleClick } from '.';

describe('handleClick', () => {
  it('updates a button class correctly', () => {
    const setButtonClass = jest.fn();

    handleClick(true, setButtonClass);

    expect(setButtonClass).toHaveBeenCalledTimes(1);
    expect(setButtonClass).toHaveBeenCalledWith(false);
  });
});
