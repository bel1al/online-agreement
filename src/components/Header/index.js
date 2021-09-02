import React from 'react';
import { LogoDarkbg } from '../../assets/icons';
import { Wrapper, WrapperConteiner, LogoWrapper, LogoLink } from './style';

const Header = () => {
  return (
    <Wrapper>
      <WrapperConteiner>
        <LogoWrapper>
          <LogoLink href="https://www.roe.vsei.ua/">
            <LogoDarkbg width="200" />
          </LogoLink>
        </LogoWrapper>
      </WrapperConteiner>
    </Wrapper>
  );
};

export default Header;
