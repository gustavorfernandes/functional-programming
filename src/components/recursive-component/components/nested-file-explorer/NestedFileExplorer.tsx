import { NestedData } from '../../types';

interface NestedFileExplorerProps {
  data: NestedData[];
}

export default function NestedFileExplorer({ data }: NestedFileExplorerProps) {
  return (
    <div className="nested-div">
      {data.map((parent) => {
        return (
          <div key={parent.name}>
            <span>{parent.name}</span>
            <div>{parent.children && <NestedFileExplorer data={parent.children} />}</div>
          </div>
        );
      })}
    </div>
  );
}
