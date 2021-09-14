import React from 'react';

import { Header } from '../Header';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps): React.ReactElement {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
