/*
 * Copyright (c) 2021-2023 Datalayer, Inc.
 *
 * MIT License
 */

import { Button, Label } from '@primer/react';
import { Box } from '@datalayer/primer-addons';
import { PlayIcon } from '@primer/octicons-react';
import {
  useCellsStore,
  useKernelsStore,
  Cell,
  KernelIndicator,
  Kernel,
} from '@datalayer/jupyter-react';

const CELL_ID = 'cell-example-1';

const DEFAULT_SOURCE = `from IPython.display import display

for i in range(10):
    display('I am a long string which is repeatedly added to the dom in separated divs: %d' % i)`;

interface CellExampleProps {
  kernel: Kernel;
}

export const CellExample = ({ kernel }: CellExampleProps) => {
  const cellsStore = useCellsStore();
  const kernelsStore = useKernelsStore();
  return (
    <>
      <Box as="h1">Cell Example</Box>
      <Box as="pre">Source: {cellsStore.getSource(CELL_ID)}</Box>
      <Box>Outputs Count: {cellsStore.getOutputsCount(CELL_ID)}</Box>
      <Box>
        Kernel State:{' '}
        <Label>
          {kernel && kernelsStore.getExecutionState(kernel.id)}
        </Label>
      </Box>
      <Box>
        Kernel Phase:{' '}
        <Label>
          {kernel && kernelsStore.getExecutionPhase(kernel.id)}
        </Label>
      </Box>
      <Box>
        <KernelIndicator
          kernel={kernel?.connection}
          label="Kernel Indicator"
        />
      </Box>
      <Box>
        <Button
          leadingVisual={() => <PlayIcon />}
          onClick={() => cellsStore.execute(CELL_ID)}
        >
          Run cell
        </Button>
      </Box>
      {kernel && (
        <Cell id={CELL_ID} source={DEFAULT_SOURCE} kernel={kernel} />
      )}
    </>
  );
};

export default CellExample;
