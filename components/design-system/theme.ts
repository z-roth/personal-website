import { createTheme, typography } from "@mui/system";

const theme = createTheme({
  typography: {
    fontFamily: "Helvetica",
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 36,
    },
    h3: {
      fontSize: 24,
    },
    body: {
      fontSize: 16,
    },
  },
});

export default theme;
