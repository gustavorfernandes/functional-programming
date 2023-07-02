import { Link } from 'react-router-dom';

import First from './components/first-button';
import Second from './components/second-button';
import Third from './components/third-button';

export default function HighOrderComponent() {
  return (
    <div>
      <First />
      <Second />
      <Third />

      <div className="link">
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}
