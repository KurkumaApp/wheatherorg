import React from 'react';

import { ReactComponent as SyncIcon } from '_/assets/sync.svg';
import { SyncButton } from './components/SyncButton';
import { SyncTime } from './components/SyncTime';

import { Wrapper } from './components/Wrapper';

interface WheatherSyncProps {
  lastSync: number;
  handleOnClickSync: React.MouseEventHandler<HTMLButtonElement>;
}

export const WheatherSync: React.FunctionComponent<WheatherSyncProps> = ({
  lastSync,
  handleOnClickSync,
}) => (
  <Wrapper>
    <SyncTime>
      <span>last sync:</span>{' '}
      {new Date(lastSync).toLocaleString('en-GB', {
        timeZone: 'Europe/Kiev',
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
      })}
    </SyncTime>
    <SyncButton type="button" onClick={(event) => handleOnClickSync(event)}>
      <span>
        <SyncIcon />
      </span>
    </SyncButton>
  </Wrapper>
);
