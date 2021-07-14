import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 7px 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
