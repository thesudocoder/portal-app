import { createMuiTheme } from '@material-ui/core/styles';

const appBlue = "#0B72B9"
const appOrange = "#FFBA60"

const theme = createMuiTheme({
  palette: {
    common: {
        appBlue: `${appBlue}`,
        appOrange: `${appOrange}`
    },
    primary: {
      main: `${appBlue}`,
    },
    secondary: {
      main: `${appOrange}`,
    },
  },
  typography: {
    tab: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    layout: {
      height: "calc(100vh - 128px)",
      width: "100%",
      display: "inline-flex",
      backgroundColor: "#e2e8ed"
    }
  }
});

export default theme