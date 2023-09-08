import { useState } from 'react';

import { File } from '../../types/types';
import ContextMenu from '../ContextMenu';

import file from '../../assets/svgs/file-icon.svg';
import './FileComponent.scss';

type FileComponentProps = {
  depth: number;
  fileData: File;
};

type MenuPosition = {
  left: number;
  top: number;
};

export enum ContextMenuOptions {
  Copy = 'copy',
  Delete = 'delete',
  Rename = 'rename'
}

const FileComponent = ({ depth, fileData }: FileComponentProps) => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition>({
    left: 0,
    top: 0
  });

  const handleLeftClick = () => {
    console.log(`Left-clicked on ${fileData.name}`);
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setContextMenuVisible(true);
    setMenuPosition({ top: e.clientY, left: e.clientX });
  };

  // TODO FUTURE: event propogation should be stop (e.stopPropogation) to avoid left click on context menu option selection
  const handleOptionClick = (option: ContextMenuOptions) => {
    if (option === ContextMenuOptions.Copy) {
      // TODO FUTURE: Copy logic - should read `event.target.value` or give an unqiue id to every file and copy it
    } else if (option === ContextMenuOptions.Delete) {
      // TODO FUTURE: Delete logic - should read sample data in the state and update the state upon delete, the state can be passed as a context API to avoid props drilling
    } else if (option === ContextMenuOptions.Rename) {
      // TODO FUTURE: Rename logic - should allow editable input box on choosing rename from context menu to change the file name and upon enter or clicking anywhere it should update state and re-render
    }

    // Close the context menu
    setContextMenuVisible(false);
  };

  const closeContextMenu = () => {
    setContextMenuVisible(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(`Left-clicked on ${fileData.name}`);
    }
  };

  return (
    <div onContextMenu={handleContextMenu} onClick={handleLeftClick}>
      <div
        className="file-name"
        onKeyDown={handleKeyPress}
        tabIndex={0}
        role="button"
        aria-label={`Left click to console log file name and right click to open context menu`}
      >
        <img src={file} alt="file" className={`file-icon depth-${depth}`} />{' '}
        {fileData.name}
      </div>
      <div className="context-menu">
        {contextMenuVisible && (
          <ContextMenu
            top={menuPosition.top}
            left={menuPosition.left}
            onItemClick={handleOptionClick}
          />
        )}
      </div>
    </div>
  );
};

export default FileComponent;
