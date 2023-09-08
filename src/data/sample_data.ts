import { FileType, Folders } from '../types/types';

export const folders: Folders = {
  type: FileType.Folder,
  name: 'parent',
  data: [
    {
      type: FileType.Folder,
      name: 'root',
      data: [
        {
          type: FileType.Folder,
          name: 'src',
          data: [
            {
              type: FileType.File,
              meta: 'js',
              name: 'index.js'
            }
          ]
        },
        {
          type: FileType.Folder,
          name: 'public',
          data: [
            {
              type: FileType.File,
              meta: 'ts',
              name: 'index.ts'
            }
          ]
        },
        {
          type: FileType.File,
          meta: 'html',
          name: 'index.html'
        },
        {
          type: FileType.Folder,
          name: 'data',
          data: [
            {
              type: FileType.Folder,
              name: 'images',
              data: [
                {
                  type: FileType.File,
                  meta: 'img',
                  name: 'image.png'
                },
                {
                  type: FileType.File,
                  meta: 'img',
                  name: 'image2.webp'
                }
              ]
            },
            {
              type: FileType.File,
              meta: 'svg',
              name: 'logo.svg'
            }
          ]
        },
        {
          type: FileType.File,
          meta: 'css',
          name: 'style.css'
        }
      ]
    }
  ]
};
