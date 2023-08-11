import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles';
import { JournalApp } from './JournalApp';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <JournalApp />
  </BrowserRouter>
);

