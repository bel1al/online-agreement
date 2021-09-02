import { Grid, Paper, TextField } from '@material-ui/core';
import InputMask from 'react-input-mask';
import React from 'react';

import { useStyles } from './style';

const MainForm = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            className={classes.block1}
            required
            name="name"
            label="ПІБ"
            variant="filled"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classes.block1}
            required
            name="email"
            label="E-mail"
            type="email"
            variant="filled"
          />
        </Grid>
        <Grid item xs={3}>
          <InputMask
            mask="+38(999) - 999 - 99 - 99"
            disabled={false}
            maskChar=" "
          >
            {() => (
              <TextField
                className={classes.block1}
                required
                name="contact"
                label="Контактний телефон"
                variant="filled"
              />
            )}
          </InputMask>
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classes.block1}
            required
            name="pin"
            label="ПІН"
            variant="filled"
            inputProps={{
              maxLength: 12,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainForm;
