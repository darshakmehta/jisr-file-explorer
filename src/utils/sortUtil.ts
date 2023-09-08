import { File, Folder } from '../types/types';

/**
 * Sort Array based on folder at top followed by file
 * @param data Array of File or Folder
 * @returns sorted array with Folder at top and followed by File
 */
export const sortByType = (data: (File | Folder)[]) => {
  const typeOrder = ['folder', 'file'];

  data.sort((a, b) => {
    const typeA = a.type.toLowerCase();
    const typeB = b.type.toLowerCase();

    // Get the index of the type in the order array
    const indexA = typeOrder.indexOf(typeA);
    const indexB = typeOrder.indexOf(typeB);

    // Compare the indexes to determine the sorting order
    return indexA - indexB;
  });

  return data;
};
