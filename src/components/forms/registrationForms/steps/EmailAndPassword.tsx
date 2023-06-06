import React from 'react';
import TextInput from 'ui/inputs/formInputs/TextInput';
import RegistrationFormInputsWrapper from 'ui/wrappers/SignUpFormInputsWrapper/RegistrationFormInputsWrapper';

function EmailAndPassword() {
  return (
    <RegistrationFormInputsWrapper>
      <TextInput name='email' type='email' placeholder='Your email' label='Email' />
      <TextInput name='password' type='password' placeholder='Your password' label='Password' />
    </RegistrationFormInputsWrapper>
  );
}

export default EmailAndPassword;