import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      flex: 1,
      justifyContent: 'space-between'
    },
    btn: {
      marginRight: theme.spacing(2),
    }
  }),
);