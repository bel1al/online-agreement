import { Button } from '@material-ui/core';
import React from 'react';
import MediumLabel from '../MediumLabel';
import SmallLabel from '../SmallLabel';
import { ButtonWrapper, Wrapper, ButtonsWrapper } from './style';

const DocumentAttach = () => {
  return (
    <Wrapper>
      <MediumLabel color={'gray'} top={'2rem'}>
        Прикріпіть копії документів
      </MediumLabel>

      <ButtonsWrapper>
        <ButtonWrapper>
          <Button variant="contained" component="label">
            Виберіть файл
            <input type="file" name="documents" hidden multiple />
          </Button>
          <SmallLabel color={'gray'} top={'1rem'}>
            Розмір файлу:9 Мб <br />
            Формат: rar, 7z, zip, jpg, pdf
          </SmallLabel>
        </ButtonWrapper>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default DocumentAttach;
