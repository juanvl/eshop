import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

export default function Button({ red, type, onClick, children }) {
  return (
    <S.Button red={red} type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  red: PropTypes.bool,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired,
};

Button.defaultProps = {
  red: false,
  onClick: undefined,
};
