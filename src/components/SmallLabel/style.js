import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;

  text-align: ${(props) => (props.center ? 'center' : 'none')};
`;
export const TestStyles = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.color || 'black'};
`;
