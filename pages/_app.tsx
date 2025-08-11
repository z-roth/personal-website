import { ThemeUIProvider } from "theme-ui";
import { theme } from "../theme";
import { AppProps } from "next/app";
import "@fontsource-variable/inter";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeUIProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
};

export default App;
