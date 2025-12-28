/*
 * Copyright (c) 2021-2023 Datalayer, Inc.
 *
 * MIT License
 */

import { useMemo } from 'react';
import { INotebookContent } from '@jupyterlab/nbformat';
import { Box } from '@datalayer/primer-addons';
import {
  useJupyter,
  CellSidebarExtension,
  CellSidebarButton,
  JupyterReactTheme,
  KernelIndicator,
  Notebook2,
} from '@datalayer/jupyter-react';
import { CellToolbarExtension } from './extensions';

import NBFORMAT from './notebooks/NotebookExample1.ipynb.json';

export const NotebookExample = () => {
  const { serviceManager, defaultKernel } = useJupyter({
    startDefaultKernel: true,
  });
  const extensions = useMemo(
    () => [
      new CellToolbarExtension(),
      new CellSidebarExtension({ factory: CellSidebarButton }),
    ],
    []
  );
  return (
    <JupyterReactTheme>
      <Box as="h1">Notebook Example</Box>
      {serviceManager && defaultKernel && (
        <>
          <Box>
            <KernelIndicator
              kernel={defaultKernel?.connection}
              label="Kernel Indicator"
            />
          </Box>
          <Notebook2
            nbformat={NBFORMAT as INotebookContent}
            id="notebook2-nbformat-id"
            kernel={defaultKernel}
            serviceManager={serviceManager}
            height="calc(100vh - 2.6rem)" // (Height - Toolbar Height).
            extensions={extensions}
            /*
            collaborationServer={{
              baseURL: 'https://prod1.datalayer.run',
              token: '',
              documentName: '',
              type: 'datalayer'
            }}
            */
          />
        </>
      )}
    </JupyterReactTheme>
  );
};

export default NotebookExample;
