export enum FileType {
  File = 'file',
  Folder = 'folder'
}

export type File = {
  type: FileType.File;
  meta: string;
  name: string;
};

export type Folder = {
  type: FileType.Folder;
  name: string;
  data: (File | Folder)[];
};

export type Folders = Folder;
