import React from 'react';
import './Button.scss';

interface Props {
  theme?: 'red' | 'white';
  onClick: () => void;
  children: JSX.Element[] | JSX.Element;
}

export default function Button({ theme = 'red', onClick, children }: Props) {
  return (
    <button className={`btn ${theme}`} onClick={onClick}>
      {children}
    </button>
  );
}
