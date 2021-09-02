import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';
import { Wrapper } from './style';

const AgreetText = () => {
  // const handleChange = (e) => {
  //   let isChecked = e.target.checked;
  // };

  return (
    <Wrapper>
      <FormControlLabel
        control={<Checkbox required />}
        label="Даю свою згоду на отримання, зберігання і обробку персональних даних."
      />
    </Wrapper>
  );
};

export default AgreetText;
