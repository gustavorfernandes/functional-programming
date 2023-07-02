import { ComponentType, useState } from 'react';

import { ButtonProps } from '../../types/button';
import { handleClick } from '../../utils/handle-click';

function WithClick<P>(Component: ComponentType<P & ButtonProps>) {
  const ComponentWithClick = (props: P) => {
    const [buttonPrimary, setButtonClass] = useState(false);

    return (
      <Component
        {...props}
        buttonPrimary={buttonPrimary}
        onClick={() => handleClick(buttonPrimary, setButtonClass)}
      />
    );
  };

  return ComponentWithClick;
}

export default WithClick;
