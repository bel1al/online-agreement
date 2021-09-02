import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';

import { ButtonWrapper } from './style';
import { Wrapper } from '../instruction/style';
import AgreetText from '../../components/AgreetText';
import BigLabel from '../../components/BigLabel';
import LayoutDefault from '../../components/LayoutDefault';
import DocumentAttach from '../../components/DocumentAttach';
import MainForm from '../../components/MainForm';

const MainPage = () => {
  let history = useHistory();
  const backButtonHandler = () => {
    history.push('/');
  };
  const handleSubmit = () => {};
  return (
    <LayoutDefault>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <BigLabel color={'gray'} top={'2rem'} center>
            Online форма подачі документів
          </BigLabel>
          <MainForm />
          <DocumentAttach />
          <AgreetText />
          <ButtonWrapper>
            <Button variant="contained" onClick={backButtonHandler}>
              Повернутися назад
            </Button>
            <Button
              style={{ maxWidth: '120px' }}
              variant="contained"
              type="submit"
            >
              Відправити
            </Button>
          </ButtonWrapper>
        </form>
      </Wrapper>
    </LayoutDefault>
  );
};

export default MainPage;
