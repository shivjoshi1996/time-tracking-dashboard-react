import { ThemeProvider } from 'styled-components';
import Page from './components/Page';
import { GlobalStyles } from './components/styles/GlobalStyles';

const theme = {
  colors: {
    primary: 'hsl(246, 80%, 60%)',
    background: 'hsl(226, 43%, 10%)',
    card: 'hsl(235, 46%, 20%)',
    hover: 'hsl(235, 45%, 61%)',
    accent: 'hsl(236, 100%, 87%)',
    font: 'white',
  },
};

function App({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page>{children}</Page>
    </ThemeProvider>
  );
}

export default App;
