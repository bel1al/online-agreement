import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  block1: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '19rem',
  },
  block2: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '19rem',
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));
