import '@mantine/core/styles.css';
import './App.css';

import { MantineProvider } from '@mantine/core';
import ContextMenu from './contextMenu';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ContextMenu />
    </MantineProvider>
  );
}
