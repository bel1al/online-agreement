import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => (props.center ? 'center' : 'none')};
`;
export const TestStyles = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.color || 'black'};
  margin: 0;
  margin-top: ${(props) => props.top || '0'};
`;
