import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Routing from './routing/main';

createRoot( document.getElementById('root') )
  .render( 
    <React.StrictMode>
      <Routing /> 
    </React.StrictMode>  
  );
