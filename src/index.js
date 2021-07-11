import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  StoresProvider,
  CartProvider,
  CatalogProvider,
  ModalProvider,
} from './contexts';

import { App } from './App';

ReactDOM.render(
  <StrictMode>
    <StoresProvider>
      <CartProvider>
        <CatalogProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </CatalogProvider>
      </CartProvider>
    </StoresProvider>
  </StrictMode>,
  document.getElementById('root')
);
