import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  height: 600px;
  padding: 20px;

  h1 {
    color: #fff;
    text-align: center;
    margin-bottom: 50px;
  }

  > span {
    display: flex;
    justify-content: flex-end;

    > a {
      color: #fff;
      border: 1px solid #fff;
      font-size: 16px;

      width: fit-content;
      padding: 5px 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      opacity: 0.9;

      svg {
        margin-right: 5px;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  ul {
    margin-bottom: 20px;
  }

  ul > li {
    background-color: #fff;
    margin: 15px 0;
    padding: 20px;
    border-radius: 4px;

    display: flex;
    justify-content: space-between;

    div > strong {
      font-size: 20px;
      font-weight: bold;
      display: block;
      margin-bottom: 10px;
    }

    div > span {
      color: #999;
      font-size: 18px;
      font-weight: bold;
    }
  }

  > div {
    display: flex;
    justify-content: center;
  }
`;
