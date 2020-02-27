import styled from 'styled-components';

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;

  span {
    font-size: 20px;
    color: #fff;
    margin-bottom: 20px;

    &:first-child {
      font-size: 50px;
      font-weight: bold;
    }
  }
`;
