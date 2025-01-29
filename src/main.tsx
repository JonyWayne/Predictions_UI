import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './app/store/store';
import { HomePage } from './pages/home/ui/HomePage';
import './app/styles/index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <PersistGate loading={<div />} persistor={persistor}>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </PersistGate>
    </React.StrictMode>
  );
} else {
  console.error('Элемент с id "root" не найден в DOM');
}
