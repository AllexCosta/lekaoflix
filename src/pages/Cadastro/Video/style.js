import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  width: 90%;
  margin: auto;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
`;

export const ButtonSalvar = styled.button`
  padding: 0 20px;
  margin-right: 20px;
  border: 0;
  border-radius: 5px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: var(--primary);
  cursor: pointer;
  outline:none;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonLimpar = styled.button`
  padding: 0 20px;
  margin-left: 20px;
  border: 0;
  border-radius: 5px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #9E9E9E;
  cursor: pointer;
  outline:none;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const LinkCadastrar = styled(Link)`
  position: relative;
  display: block;
  margin-block: 10px;
`;