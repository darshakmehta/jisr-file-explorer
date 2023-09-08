import { useState } from 'react';

import FileExplorer from '../FileExplorer';

import { Folder } from '../../types/types';
import { sortByType } from '../../utils/sortUtil';

import folder from '../../assets/svgs/folder-icon.svg';
import './FolderComponent.scss';

type FolderComponentProps = {
  depth: number;
  folderData: Folder;
};

const FolderComponent = ({ depth, folderData }: FolderComponentProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleFolder = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div onClick={toggleFolder}>
        <img
          src={folder}
          alt="folder"
          className={`folder-icon depth-${depth}`}
        />{' '}
        {folderData.name}
      </div>
      {expanded && (
        <FileExplorer depth={depth} folders={sortByType(folderData.data)} />
      )}
    </div>
  );
};

export default FolderComponent;
