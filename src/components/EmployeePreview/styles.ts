import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center'
    },
    infoGrid: {
      padding: theme.spacing(4),
      paddingTop: 0,
    },
    subGrid: {
      maxWidth: '250px',
      textAlign: 'left',
      margin: '8px auto',

      '& > div': {
        lineHeight: 2,
      }
    },
    avatarContainer: {
      padding: theme.spacing(4),
    },
    avatar: {
      display: 'inline-flex',
      width: theme.spacing(15),
      height: theme.spacing(15),
    }
  }),
);