import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 4px;

  border-radius: 5px;

  svg {
    width: 24px;
    height: 24px;

    fill: #836dc5;
    margin-right: 7px;
  }

  &:hover {
    background-color: #dfdfdf;
  }
`;
