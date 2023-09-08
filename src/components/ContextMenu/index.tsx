import { ContextMenuOptions } from '../FileComponent';

import './ContextMenu.scss';

type ContextMenuProps = {
  left: number;
  top: number;
  onItemClick: (option: ContextMenuOptions) => void;
};

const ContextMenu = ({ left, top, onItemClick }: ContextMenuProps) => {
  const handleContextMenuClick = (option: ContextMenuOptions) => {
    onItemClick(option);
  };

  return (
    <div
      aria-labelledby="context-menu-label"
      className="context-menu-options"
      role="menu"
      style={{ left, top }}
    >
      <div
        role="menuitem"
        tabIndex={0}
        onClick={() => handleContextMenuClick(ContextMenuOptions.Copy)}
      >
        Copy
      </div>
      <div
        role="menuitem"
        tabIndex={0}
        onClick={() => handleContextMenuClick(ContextMenuOptions.Delete)}
      >
        Delete
      </div>
      <div
        role="menuitem"
        tabIndex={0}
        onClick={() => handleContextMenuClick(ContextMenuOptions.Rename)}
      >
        Rename
      </div>
    </div>
  );
};

export default ContextMenu;
