import { Button } from '@material-ui/core';
import React from 'react';

import {
  TextBlockFirst,
  TextBlockSecond,
  Wrapper,
  WrapperButton,
} from './style';
import BigLabel from '../../components/BigLabel';
import LayoutDefault from '../../components/LayoutDefault';
import SmallLabel from '../../components/SmallLabel';
import { useHistory } from 'react-router-dom';

const InstructionPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/form');
  };

  return (
    <LayoutDefault>
      <Wrapper>
        <BigLabel color={'gray'} top={'2rem'} center>
          Укладення договору online
        </BigLabel>
        <SmallLabel center>
          Ви можете укласти договір про надання послуг із розподілу
          електроенергії за допомогою online форми без відвідування відділів РЕМ
          На сьогодні послуга доступна для замовників, фізичних осіб (для
          власників домогосподарств)
        </SmallLabel>
        <TextBlockFirst style={{ textAlign: 'justify' }}>
          <p>Ця безкоштовна послуга дозволяє швидко укласти договір:</p>
          <ul>
            <li>
              у зв'язку зі зміною власника житла (без зміни технічних параметрів
              - потужності, точки підключення і т.д.);{' '}
            </li>
            <li>
              у зв'язку зі зміною тарифу при наявності реалізованих технічних
              умов та узгодженого постачальником проекту внутрішнього
              електропостачання.
            </li>
          </ul>
          <p>
            * Через введення в Україні карантину, тимчасово процес укладення
            договорів із новими клієнтами можливий в тому випадку, якщо прилад
            обліку розташований на сходовій клітці житла, де не потрібен контакт
            із замовником. Для укладення договору про надання послуг з розподілу
            електроенергії Вам потрібно:
          </p>
        </TextBlockFirst>
        <TextBlockSecond>
          <ol>
            <li>
              Ознайомитися з публічним договором &nbsp;
              <a href="https://www.roe.vsei.ua/publichni-dogovory/">
                https://www.roe.vsei.ua/publichni-dogovory/
              </a>
              ;
            </li>
            <li>
              Скачати необхідні для зоповнення бланки (пропоную розробити для
              зразку та розмістити посилання для перегляду - приклад заповненої
              заяви):
              <ol>
                <li>
                  Заява-приєднання про укладення відповідного договору із
                  зазначенням місцезнаходження об'єкта, реквізитів заявника; (у
                  вигляді посилання для вивантаження бланку)
                </li>
                <li>
                  Заява-згода співвласника про укладання відповідного договору
                  про надання послуг з розподілу (передачі) електричної енергії.
                  (Дана заява-згода необхідна в разі кількох співвласників
                  квартири). (у вигляді посилання для вивантаження бланку)
                </li>
              </ol>
            </li>
            <li>
              Заповнити, роздрукувати і підписати скачаний(-і) бланк(-и)
              заяв(-и);
            </li>
            <li>Відсканувати чи сфотографувати та прислати якісне фото;</li>
            <li>
              Прикріпити скан-копії документів і заяв:
              <ol>
                <li>
                  Заяву-приєднання про укладення відповідного договору із
                  зазначенням місцезнаходження об'єкта, реквізитів заявника;
                </li>
                <li>
                  Копію паспорта або документ, який його замінює. У разі надання
                  ID-карти необхідно додати довідку про реєстрацію місця
                  проживання;
                </li>
              </ol>
            </li>
            <li>Натиснути кнопку "Відправити";</li>
          </ol>
        </TextBlockSecond>
        <WrapperButton>
          <Button
            variant="contained"
            color="primary"
            style={{ maxWidth: '120px', fontSize: '18px', marginBottom: '2%' }}
            onClick={handleClick}
          >
            Далі
          </Button>
        </WrapperButton>
      </Wrapper>
    </LayoutDefault>
  );
};

export default InstructionPage;
