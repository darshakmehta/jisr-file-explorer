import { useState } from 'react';

import FileExplorer from '../FileExplorer';

import { folders } from '../../data/sample_data';
import { sortByType } from '../../utils/sortUtil';

import folder from '../../assets/svgs/folder-icon.svg';
import './App.scss';

const App = () => {
  const [expanded, setExpanded] = useState(false);
  const depth = 0; // initial depth of the file explorer

  const toggleFolder = () => {
    setExpanded(!expanded);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      toggleFolder();
    }
  };

  return (
    <div className="container">
      <div
        className="parent-folder"
        onClick={toggleFolder}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex={0}
        aria-label={`Toggle folder: ${folders.name}`}
      >
        <img
          src={folder}
          alt="folder"
          className={`folder-icon depth-${depth}`}
        />{' '}
        {folders.name}
      </div>
      {expanded && (
        <FileExplorer depth={depth + 1} folders={sortByType(folders.data)} />
      )}
    </div>
  );
};

export default App;
