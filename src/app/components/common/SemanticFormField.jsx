import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

export default function SemanticFormField ({
  input,
  type,
  label,
  placeholder,
  toggleWarning,
  meta: {
    touched,
    error,
    warning,
  },
  as: As = Input,
  ...props }) {
  function handleChange (e, { value }) {
    return input.onChange(value);
  }

  return (
    <Form.Field>
      <As
        { ...props }
        { ...input }
        value={ input.value }
        type={ type }
        label={ label }
        placeholder={ placeholder }
        onChange={ handleChange }
      />
      { touched && !toggleWarning &&
        ((error && <span><i className='error'>{ error }</i></span>) ||
        (warning && <span><i className='error'>{ warning }</i></span>)) }
    </Form.Field>
  );
}

SemanticFormField.propTypes = {
  as: PropTypes.any,
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.object
};
