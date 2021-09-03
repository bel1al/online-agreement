import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import Swal from 'sweetalert2';

import { ButtonWrapper } from './style';
import { postData } from '../../utils/CallBackAPI';
import { Wrapper } from '../instruction/style';
import AgreetText from '../../components/AgreetText';
import BigLabel from '../../components/BigLabel';
import DocumentAttach from '../../components/DocumentAttach';
import LayoutDefault from '../../components/LayoutDefault';
import MainForm from '../../components/MainForm';

const MainPage = () => {
  let history = useHistory();
  const backButtonHandler = () => {
    history.push('/');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    postData('/ticket/upload', data)
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Успіх',
            text: 'Ваша заявка надісла на опрацювання',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Упс....',
            text: 'Виникла помилка, спробуйте пізніше',
          });
        }
      })
      .catch((err) => console.log(err));
  };
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
