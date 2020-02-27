import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

export default function Input({ type, name, placeholder, ...props }) {
  return (
    <S.Input type={type} name={name} placeholder={placeholder} {...props} />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
