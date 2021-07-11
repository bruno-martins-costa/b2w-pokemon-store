import { Routes } from './routes';
import { GlobalStyles } from './styles/GlobalStyles';
import { useTheme } from './hooks/useTheme';
import { ThemeProvider } from 'styled-components';

export function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
}
