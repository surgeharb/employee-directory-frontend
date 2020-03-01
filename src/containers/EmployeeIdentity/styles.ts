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
      display: 'inline-flex',
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
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