import React from 'react';
import './Block.scss';
import { ReactChildren } from 'react';

interface Props {
  theme?: 'white' | 'blue';
  children: JSX.Element[] | JSX.Element;
}

export default function Block({ theme = 'blue', children }: Props) {
  return <div className={`block ${theme}`}>{children}</div>;
}
