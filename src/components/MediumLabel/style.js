import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: block;
  text-align: center;
  justify-content: ${(props) => (props.center ? 'center' : 'none')};
`;
export const TestStyles = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.color || 'black'};
  margin: 0;
  margin-top: ${(props) => props.top || '0'};
`;
