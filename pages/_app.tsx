import { ThemeProvider } from "@mui/system";
import "../styles/globals.css";
import theme from "../components/design-system/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
