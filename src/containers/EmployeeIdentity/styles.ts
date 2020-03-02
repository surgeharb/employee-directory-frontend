import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: theme.spacing(2),
    },
    previewPaper: {
      height: '100%',
    },
    selectInputLabel: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      backgroundColor: '#fff',
    },
    selector: {
      display: 'inline-flex',
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
    textField: {
      margin: '8px!important',
    },
    avatar: {
      display: 'inline-flex!important',
      width: '20px!important',
      height: '20px!important',
    },
    btns: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    btnContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-around'
    },
    btn: {
      minWidth: '150px',
    }
  }),
);