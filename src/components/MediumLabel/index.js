import React from 'react';
import { TestStyles, TextWrapper } from './style';

const MediumLabel = ({ color, top, center, children }) => {
  return (
    <TextWrapper center={center}>
      <TestStyles color={color} top={top}>
        {children}
      </TestStyles>
    </TextWrapper>
  );
};

export default MediumLabel;
