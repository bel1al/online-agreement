import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '3%',
  },
  block1: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '18rem',
  },
  block2: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '20rem',
  },
  block3: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '22rem',
  },
  text_field: {
    fontSize: '0.8rem',
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  select: {
    width: '16rem',
    height: '4rem',
  },
}));
