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

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      toggleFolder();
    }
  };

  return (
    <div>
      <div
        onKeyDown={handleKeyPress}
        tabIndex={0}
        role="button"
        onClick={toggleFolder}
        aria-label={`Toggle folder: ${folderData.name}`}
      >
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
