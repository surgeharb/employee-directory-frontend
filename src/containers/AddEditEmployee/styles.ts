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
    textField: {
      margin: theme.spacing(2),
    },
  }),
);