import { render } from '@testing-library/react';

import { folders } from '../../data/sample_data';
import FileExplorer from './';

test('renders FileExplorer component without errors', () => {
  render(<FileExplorer depth={1} folders={folders} />);
});
