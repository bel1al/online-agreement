import React from 'react';
import { TestStyles, TextWrapper } from './style';

const SmallLabel = ({ color, children, center }) => {
  return (
    <TextWrapper center={center}>
      <TestStyles color={color}>{children}</TestStyles>
    </TextWrapper>
  );
};

export default SmallLabel;
