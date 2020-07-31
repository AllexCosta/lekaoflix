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

export const ButtonSave = styled.button`
  padding: 0 20px;
  border: 0;
  border-radius: 5px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  background-color: var(--primary);
  color: #fff;
  cursor: pointer;
  outline:none;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const LinkVoltar = styled(Link)`
  position: relative;
  display: block;
  margin-block: 10px;
`;

export const Table = styled.table`
  width: 500px;
  margin: 20px auto;
  border-spacing: 0;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 20px;
  }
  th, tr, td {
    border: 1px solid #fff;
    padding: 10px 20px;
    text-align: center;
  }
`;
