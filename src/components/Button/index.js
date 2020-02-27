import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

export default function Button({ type, onClick, children }) {
  return (
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};

Button.defaultProps = {
  onClick: undefined,
};
