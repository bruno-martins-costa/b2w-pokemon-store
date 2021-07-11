import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';

export function Themes({ children }) {
  const { theme } = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
