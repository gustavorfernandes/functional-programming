import { render, screen } from '@testing-library/react';

import { FirstButton } from './FirstButton';

describe('FirstButton', () => {
  it('should render the component with correct class and text', () => {
    const handleClick = jest.fn();

    render(<FirstButton buttonPrimary={true} onClick={handleClick} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn');
    expect(button).toHaveClass('btn-primary');
  });

  it('should call the handleClick function when clicked', () => {
    const handleClick = jest.fn();

    render(<FirstButton buttonPrimary={false} onClick={handleClick} />);

    screen.getByRole('button').click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders button without btn-primary class when buttonPrimary is false', () => {
    const handleClick = jest.fn();

    render(<FirstButton buttonPrimary={false} onClick={handleClick} />);

    const button = screen.getByRole('button');

    expect(button).not.toHaveClass('btn-primary');
  });
});
