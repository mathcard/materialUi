import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
  palette: {
    primary: {
      main: green[700]
    },
    secondary: {
      main: red[500]
    }
  }
});