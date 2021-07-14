import React from 'react';
import { StatusText } from './components/StatusText';
import { Wrapper } from './components/Wrapper';

interface WheatherStatusProps {
  status: string;
}

export const WheatherStatus: React.FunctionComponent<WheatherStatusProps> = ({
  status,
}) => (
  <Wrapper>
    <StatusText>{status}</StatusText>
  </Wrapper>
);
