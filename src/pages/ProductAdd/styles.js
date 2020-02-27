import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  padding: 20px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
    padding: 20px 0;

    a > svg {
      color: #fff;
      vertical-align: middle;
    }

    a > svg,
    span {
      font-size: 25px;
      width: 25px;
    }

    h1 {
      color: #fff;
      text-align: center;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin-bottom: 20px;
    }
  }
`;
