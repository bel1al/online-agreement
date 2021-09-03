import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import InputMask from 'react-input-mask';
import React from 'react';

import { useStyles } from './style';
import { meterZone } from '../../helpers/defaultValue';

const MainForm = () => {
  const classes = useStyles();
  const [state, setState] = React.useState('I зона');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <Grid className={classes.container} spacing={3}>
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
        <Grid item>
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
        <Grid item>
          <TextField
            className={classes.block3}
            required
            name="adress"
            label="Адреса (місто, вулиця, будинок, квартира)"
            variant="filled"
            inputProps={{
              maxLength: 12,
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.block1}
            name="personal_account"
            label="Особовий рахунок"
            variant="filled"
            inputProps={{
              maxLength: 12,
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.block2}
            required
            name="owners_count"
            label="Кількість власників/ співвласників житловим приміщенням"
            variant="filled"
            InputLabelProps={{ className: classes.text_field }}
            inputProps={{
              maxLength: 12,
            }}
          />
        </Grid>
        <Grid item>
          <FormControl variant="filled">
            <InputLabel id="rem-select-label">
              Виберіть кількість зон вашого лічильника
            </InputLabel>
            <Select
              required
              labelId="rem-select-label"
              name="zone_count"
              value={state}
              onChange={handleChange}
              variant="filled"
              className={classes.select}
            >
              {meterZone.map((obj, key) => (
                <MenuItem value={obj.name} key={key}>
                  {obj.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainForm;
