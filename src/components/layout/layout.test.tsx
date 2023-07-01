import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Layout } from '.';

describe('Layout', () => {
  it('renders the component correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(container.textContent).toContain('Pure Functional Component');
  });
});
