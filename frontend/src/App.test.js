import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

it('renders without crashing', () => {
  const container = document.createElement('div'); // Create a new container for each test
  document.body.appendChild(container); // Append the container to the document body
  const root = createRoot(container);
  root.render(<App tab="home" />);
  root.unmount();
  document.body.removeChild(container); // Clean up the container after the test
});