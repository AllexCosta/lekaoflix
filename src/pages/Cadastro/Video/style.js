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

export const LinkCadastrar = styled(Link)`
  position: relative;
  display: block;
  margin-block: 10px;
`;
