import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
`;

export const TextBlockFirst = styled.div`
  font-size: 20px;
`;

export const TextBlockSecond = styled.div`
  font-size: 20px;
  ol {
    counter-reset: section;
    list-style-type: none;
  }
  li {
    &:before {
      counter-increment: section;
      font-weight: bolder;
      content: 'Крок ' counters(section, '.') ' ';
    }
  }
`;
export const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
