import React from "react";
import {Fields, InputArea, TextArea, Label} from './style';

const FormField = ({type, name, value, onChange, label}) => {
  return (
    <Fields>
      {type === 'textarea'?
        <TextArea
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
        /> :
        <InputArea
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      }

      <Label className="descricaoLabel">
        {label}
      </Label>
    </Fields>
  );
}

export default FormField;