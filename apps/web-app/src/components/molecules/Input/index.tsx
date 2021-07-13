import React from 'react';

import { IconContainer } from '_/components/atoms/Containers/IconContainer';

import { Wrapper } from './components/Wrapper';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  children?: React.ReactNode;
}

export const Input: React.FunctionComponent<InputProps> = ({
  children,
  ...props
}) => (
  <Wrapper className={props.value ? 'active' : ''}>
    <IconContainer>{children}</IconContainer>
    <input {...props} />
  </Wrapper>
);
