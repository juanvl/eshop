import { lighten } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  border: 0;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => lighten(0.1, props.theme.colors.primary)};
  }

  svg {
    margin-right: 5px;
  }
`;
