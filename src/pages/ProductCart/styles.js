import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  max-height: 600px;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
    padding: 20px;

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
`;

export const CartContainer = styled.div`
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  border-radius: 4px;

  .emptyCart > span {
    color: #999;
  }

  .listTitles {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      font-weight: bold;
      font-size: 16px;
      color: #999;
    }
  }

  .listContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    max-height: 350px;
    margin: 10px 0;

    .cartScroll {
      width: 100%;
      padding: 0 15px;
    }

    .listRow {
      width: 100%;
      border-bottom: 1px solid #eee;
      margin-bottom: 10px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        width: 30%;
        margin: 5px 0;
        text-align: left;
        font-weight: bold;
        font-size: 16px;
        color: #333;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        .midli > div {
          width: fit-content;
          margin: 0 auto;
        }

        &:last-child {
          text-align: right;
        }

        strong {
          color: #333;
          display: block;
          font-size: 18px;
        }

        span {
          display: block;
          margin-top: 5px;
          color: #999;
          font-size: 14px;
          font-weight: normal;
        }

        div {
          display: flex;
          align-items: center;
          width: fit-content;
          margin: 0 auto;

          input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
          }
        }

        button {
          background: none;
          border: 0;
          padding: 6px;

          svg {
            color: ${props => props.theme.colors.primary};
          }
        }
      }
    }
  }

  footer {
    width: fit-content;
    margin: 30px auto 0;

    span {
      color: #999;
      font-weight: bold;
    }
    strong {
      font-size: 28px;
      margin-left: 5px;
    }
  }
`;
