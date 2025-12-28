/*
 * Copyright (c) 2021-2023 Datalayer, Inc.
 *
 * MIT License
 */

import { useMemo } from 'react';
import { INotebookContent } from '@jupyterlab/nbformat';
import { ServiceManager } from '@jupyterlab/services';
import { Box } from '@datalayer/primer-addons';
import {
  CellSidebarExtension,
  CellSidebarButton,
  KernelIndicator,
  Notebook2,
  Kernel,
} from '@datalayer/jupyter-react';
import { CellToolbarExtension } from './extensions';

import NBFORMAT from './notebooks/NotebookExample1.ipynb.json';

interface NotebookExampleProps {
  kernel: Kernel;
  serviceManager: ServiceManager.IManager;
}

export const NotebookExample = ({ kernel, serviceManager }: NotebookExampleProps) => {
  const extensions = useMemo(
    () => [
      new CellToolbarExtension(),
      new CellSidebarExtension({ factory: CellSidebarButton }),
    ],
    []
  );
  return (
    <>
      <Box as="h1">Notebook Example</Box>
      {serviceManager && kernel && (
        <>
          <Box>
            <KernelIndicator
              kernel={kernel?.connection}
              label="Kernel Indicator"
            />
          </Box>
          <Notebook2
            nbformat={NBFORMAT as INotebookContent}
            id="notebook2-nbformat-id"
            kernel={kernel}
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
    </>
  );
};

export default NotebookExample;
