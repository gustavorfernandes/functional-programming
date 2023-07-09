import { render } from '@testing-library/react';

import { NestedFileExplorer } from '.';

import { NestedData } from '../../types';

describe('NestedFileExplorer', () => {
  const dataMock: NestedData[] = [
    {
      isFolder: true,
      name: 'Parent 1',
      children: [
        {
          isFolder: false,
          name: 'Child 1',
        },
      ],
    },
    {
      isFolder: true,
      name: 'Parent 2',
      children: [
        {
          isFolder: true,
          name: 'Child 2',
          children: [
            {
              isFolder: false,
              name: 'Grandchild 1',
            },
          ],
        },
        {
          isFolder: false,
          name: 'Child 3',
        },
      ],
    },
  ];

  it('renders the component correctly', () => {
    render(<NestedFileExplorer data={dataMock} />);
  });
});
