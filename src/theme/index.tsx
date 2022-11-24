import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import React, { ReactNode } from 'react';

interface ThemeConfigProps {
  children: ReactNode;
}

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const theme = createTheme({
    palette: {},
  });

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
