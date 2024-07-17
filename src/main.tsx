/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './styles/global.scss';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import Button from './components/ui/button';
import { Input } from './components/ui/input';

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <div className="flex flex-col justify-center w-auto p-2 m-10 align-middle">
        <h3>Welcome Home!</h3>
        <Input placeholder="Enter text" />
        <Button icon="BiRestaurant" label="Hello World" />
        <div className="flex gap-2 p-10">
          <Button icon="BiRestaurant" label="Hello World" size={'lg'} />
          <Button icon="BsFastForwardCircleFill" size={'lg'} />
          <Button label="Hello World" size={'lg'} />
        </div>
        <div className="flex gap-2 p-10">
          <Button icon="BiRestaurant" label="Hello World" />
          <Button icon="BsFastForwardCircleFill" />
          <Button label="Hello World" />
        </div>
        <div className="flex gap-2 p-10">
          <Button icon="BiRestaurant" label="Hello World" size={'sm'} />
          <Button icon="BsFastForwardCircleFill" size={'sm'} />
          <Button label="Hello World" size={'sm'} />
        </div>
        <div className="flex gap-2 p-10">
          <Button icon="BiRestaurant" label="Hello World" />
          <Button icon="BsFastForwardCircleFill" />
          <Button label="Hello World" />
        </div>
        <div className="flex gap-2 p-10">
          <Button icon="BiRestaurant" label="Hello World" />
          <Button icon="BsFastForwardCircleFill" />
          <Button label="Hello World" />
        </div>
        <div className="flex gap-2 p-10">
          <Button variant={'accent'} icon="BiRestaurant" label="Hello World" />
          <Button variant={'accent'} icon="BsFastForwardCircleFill" />
          <Button variant={'accent'} label="Hello World" />
        </div>
        <div className="flex gap-2 p-10">
          <Button
            variant={'destructive'}
            icon="BiRestaurant"
            label="Hello World"
          />
          <Button variant={'destructive'} icon="BsFastForwardCircleFill" />
          <Button variant={'destructive'} label="Hello World" />
        </div>
        <div className="flex gap-2 p-10">
          <Button variant={'ghost'} icon="BiRestaurant" label="Hello World" />
          <Button variant={'ghost'} icon="BsFastForwardCircleFill" />
          <Button variant={'ghost'} label="Hello World" />
        </div>
        <div className="flex gap-2 p-10">
          <Button variant={'link'} icon="BiRestaurant" label="Hello World" />
          <Button variant={'link'} icon="BsFastForwardCircleFill" />
          <Button variant={'link'} label="Hello World" />
        </div>
        <div className="flex gap-2 p-10">
          <Button variant={'outline'} icon="BiRestaurant" label="Hello World" />
          <Button variant={'outline'} icon="BsFastForwardCircleFill" />
          <Button variant={'outline'} label="Hello World" />
        </div>{' '}
        <div className="flex gap-2 p-10">
          <Button
            variant={'transparent'}
            icon="BiRestaurant"
            label="Hello World"
          />
          <Button variant={'transparent'} icon="BsFastForwardCircleFill" />
          <Button variant={'transparent'} label="Hello World" />
        </div>
        <div className="flex gap-2 p-10">
          <Button
            variant={'secondary'}
            icon="BiRestaurant"
            label="Hello World"
          />
          <Button variant={'secondary'} icon="BsFastForwardCircleFill" />
          <Button variant={'secondary'} label="Hello World" />
        </div>
      </div>
    </StrictMode>,
  );
}
