import { ThemeProvider } from 'styled-components';
import Page from './components/Page';
import { GlobalStyles } from './components/styles/GlobalStyles';

const theme = {
  colors: {
    primary: 'hsl(246, 80%, 60%)',
    work: 'hsl(15, 100%, 70%)',
    play: 'hsl(195, 74%, 62%)',
    study: 'hsl(348, 100%, 68%)',
    excercise: 'hsl(145, 58%, 55%)',
    social: 'hsl(264, 64%, 52%)',
    selfCare: 'hsl(43, 84%, 65%)',
    background: 'hsl(226, 43%, 10%)',
    card: 'hsl(235, 46%, 20%)',
    hover: 'hsl(235, 45%, 61%)',
    accent: 'hsl(236, 100%, 87%)',
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
