import { Routes } from './routes';
import { useTheme } from './hooks/useTheme';
import { ThemeProvider } from 'styled-components';
import { Toast } from './components/Toast';
import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <Toast />
      <GlobalStyles />
    </ThemeProvider>
  );
}
