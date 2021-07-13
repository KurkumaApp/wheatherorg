import styled from 'styled-components';

export const SelectList = styled.div`
  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 0 0 25px 25px;

  width: 400px;

  position: absolute;

  p {
    margin: 0;

    font-family: Poppins, sans-serif;
    font-size: 16px;

    &.message {
      margin: 15px 0;
      text-align: center;
      font-size: 16px;
      font-weight: 500;

      &.loading {
      }

      &.error {
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    padding: 0 15px;
    margin-bottom: 6px;

    li {
      display: flex;
      align-items: center;

      padding: 4px 0;

      svg {
        width: 24px;
        height: 24px;

        fill: #836dc5;
        margin-right: 7px;
      }
    }
  }
`;
