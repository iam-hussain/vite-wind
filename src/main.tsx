/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './styles/global.scss';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import Button from './components/ui/button';
import Box from './components/ui/box';

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Box preset={'col-center'} className='h-full p-8'>
        <Button icon="BiRestaurant" label="Hello World" />
        <Button icon="BsFastForwardCircleFill" />
        <Button label="Hello World" />
      </Box>

    </StrictMode>,
  );
}
