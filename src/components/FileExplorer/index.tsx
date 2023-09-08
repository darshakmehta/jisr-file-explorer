import FileComponent from '../FileComponent';
import FolderComponent from '../FolderComponent';
import { File, FileType, Folder, Folders } from '../types';

type FileExplorerProps = {
  depth: number;
  folders: Folders | (File | Folder)[];
};

const FileExplorer = ({ depth, folders }: FileExplorerProps) => {
  const folderData = Array.isArray(folders)
    ? { type: FileType.Folder, name: '', data: folders }
    : folders;

  return (
    <>
      <div>
        {folderData.data.map((item) => {
          if (item.type === FileType.Folder) {
            return (
              <FolderComponent
                depth={depth + 1}
                key={item.name}
                folderData={item as Folder}
              />
            );
          } else {
            return (
              <FileComponent
                depth={depth + 1}
                key={item.name}
                fileData={item as File}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default FileExplorer;
