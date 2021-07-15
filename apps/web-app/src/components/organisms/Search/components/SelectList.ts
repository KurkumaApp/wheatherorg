import styled from 'styled-components';

export const SelectList = styled.div`
  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 0 0 25px 25px;

  width: 400px;

  position: absolute;

  z-index: 1;

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

    padding: 0 11px;
    margin-bottom: 6px;

    li {
      margin: 3px 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
      }
    }
  }
`;
