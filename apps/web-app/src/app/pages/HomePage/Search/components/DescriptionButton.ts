import styled from 'styled-components';

export const DescriptionButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;

  margin-top: 3px;
  margin-left: 17px;

  font-family: Lato, sans-serif;
  font-weight: 600;
  font-size: 13px;

  color: #f4f1ff;

  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`;

export default DescriptionButton;
