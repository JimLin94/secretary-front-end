import React from 'react';
import './Avatar.scss';

interface Props {
  size?: 'lg' | 'm' | 's';
  link: string;
}

export default function Avatar({ size = 's', link }: Props) {
  return (
    <div
      className={`avatar ${size}`}
      style={{ backgroundImage: `url(${link})` }}
    />
  );
}
