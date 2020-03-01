import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center'
    },
    avatarContainer: {
      padding: theme.spacing(4)
    },
    avatar: {
      display: 'inline-flex',
      width: theme.spacing(15),
      height: theme.spacing(15),
    }
  }),
);