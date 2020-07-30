import styled from 'styled-components';

export const Fields = styled.div`
  position: relative;
  margin-bottom: 20px;
  
  &:last-of-type {
    margin-bottom: 40px;
  }
  
  .descricaoLabel {
    transition: all 200ms linear;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  position: absolute;
  top: 45%;
  left: 20px;
  color: var(--black);
  transform: translateY(-40%);
`;

export const InputArea = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 4px;
  padding: 25px 20px 5px 20px;
  &:focus,
  &:valid {
    background-color: #f3f3f3;
    border: 2px solid var(--primary);
  }
  &:focus + .descricaoLabel,
  &:valid + .descricaoLabel {
    left: 20px;
    font-size: 12px;
    transform: translateY(-100%);        
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 4px;
  padding: 25px 20px 0 20px;
  &:focus,
  &:valid {
    background-color: #f3f3f3;
    border: 2px solid var(--primary);
  }
  &:focus + .descricaoLabel,
  &:valid + .descricaoLabel {
    left: 20px;
    font-size: 12px;
    transform: translateY(-100%);        
  }
  & + .descricaoLabel {
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    top: 0;
    left: 20px;
    color: var(--white);
    transform: translateY(-20%);
  }
`;