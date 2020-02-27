import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  max-height: 600px;
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

      svg {
        margin-right: 5px;
        color: #fff;
      }

      &:hover {
        background-color: #fff;
        color: #333;

        svg {
          color: #333;
        }
      }
    }
  }

  .scrolldiv {
    margin: 20px 0;
    max-height: 350px;
  }

  ul {
    width: 100%;
  }

  ul > li {
    background-color: #fff;
    margin-bottom: 15px;
    padding: 20px;
    border-radius: 4px;

    display: flex;
    justify-content: space-between;

    div > strong {
      color: #333;
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
