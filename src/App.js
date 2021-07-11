import {
  StoresProvider,
  CartProvider,
  CatalogProvider,
  ModalProvider,
} from './contexts';
import { Routes } from './routes';
import { Toast } from './components/Toast';
import { GlobalStyles } from './styles/GlobalStyles';
import { Themes } from './contexts/Themes/ThemesContext';

export function App() {
  return (
    <StoresProvider>
      <CartProvider>
        <CatalogProvider>
          <ModalProvider>
            <Themes>
              <Routes />
              <Toast />
              <GlobalStyles />
            </Themes>
          </ModalProvider>
        </CatalogProvider>
      </CartProvider>
    </StoresProvider>
  );
}
