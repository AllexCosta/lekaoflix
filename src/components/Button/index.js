import styled from 'styled-components';

export const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background: var(--black);
  padding: 16px 24px;
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5
  };

  @media(max-width: 800px){
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    color: var(--white);
    outline: 0;
    text-align: center;
    border-radius: 0;
    border: 0;
  }
`;

export const ButtonAuxiliar = styled(Button)`
  background: var(--primary);
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const ButtonLimpar = styled(Button)`
  background-color: #9E9E9E;
  margin-left: 20px;
`;
