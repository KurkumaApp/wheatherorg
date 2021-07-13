import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  height: 40px;
  width: 400px;

  background: #fff;

  padding: 6px 15px;
  border-radius: 25px;

  &.active {
    border-radius: 25px 25px 0 0;
  }

  svg {
    width: 24px;
    height: 24px;

    margin-right: 7px;
    fill: #836dc5;
  }

  input[type='text'] {
    flex: 1 1 auto;

    border: none;
    outline: none;
    padding: 0;

    height: 24px;

    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #836dc5;
  }
`;
