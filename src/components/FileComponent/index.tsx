import { File } from '../../types/types';

import file from '../../assets/svgs/file-icon.svg';
import './FileComponent.scss';

type FileComponentProps = {
  depth: number;
  fileData: File;
};

const FileComponent = ({ depth, fileData }: FileComponentProps) => {
  const handleLeftClick = () => {
    console.log(`Left-clicked on ${fileData.name}`);
  };

  const handleContextMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // TODO FUTURE: Implement context menu logic here
  };

  return (
    <div onContextMenu={handleContextMenu} onClick={handleLeftClick}>
      <img src={file} alt="file" className={`file-icon depth-${depth}`} />{' '}
      {fileData.name}
    </div>
  );
};

export default FileComponent;
