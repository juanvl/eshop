import { darken } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => (props.red ? '#E45D5C' : '#9fe45c')};
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  border: 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    ${({ red }) =>
      red
        ? `background: ${darken(0.1, '#E45D5C')};`
        : `background: ${darken(0.1, '#9fe45c')};`}
  }

  svg {
    margin-right: 5px;
  }
`;
