import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, Input } from './style';

function FormField({
  type, name, value, onChange, label,
}) {
  const fieldID = `id_${name}`;
  const isTypeTextArea = (type === 'textarea');
  const tag = isTypeTextArea ? 'textarea' : 'input';
  return (
    <FormFieldWrapper>
      <Label>
        <Input
          as={tag}
          id={fieldID}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
