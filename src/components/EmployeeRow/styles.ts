import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editBtn: {
      padding: theme.spacing(.4)
    }
  }),
);