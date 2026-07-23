import React from 'react';
import ReactDOM from 'react-dom/client';
import FrameoApp from '../FrameoApp-React.jsx';
import { LanguageProvider } from './i18n.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <FrameoApp />
    </LanguageProvider>
  </React.StrictMode>
);
