import { Link } from 'react-router-dom';

import NestedFileExplorer from './components/nested-file-explorer/NestedFileExplorer';

import { recursiveComponentData } from './data';

export default function RecursiveComponent() {
  return (
    <div>
      <NestedFileExplorer data={recursiveComponentData} />

      <div className="link">
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}
