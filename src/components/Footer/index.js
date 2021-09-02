import { Wrapper, WrapperContent } from './style';
import SmallLabel from '../SmallLabel';
import React from 'react';

const Footer = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <SmallLabel color={'gray'}>
          © Copyright 2021 ПрАТ Рiвнеобленерго. Всі права застережено. Розробка
          веб-сайту lazarchuk
        </SmallLabel>
      </WrapperContent>
    </Wrapper>
  );
};

export default Footer;
