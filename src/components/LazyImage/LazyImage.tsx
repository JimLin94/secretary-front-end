import React, { useState, useEffect } from 'react';
import './LazyImage.scss';

interface Props {
  size?: 'lg' | 'm';
  overwriteStyle?: Record<string, string>;
  backgroundColor?: string;
  url: string;
  onClick?: (param: any) => void;
}

export default function LazyImage({
  url,
  size = 'lg',
}: Props) {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  useEffect(() => {
    if (url) {
      const instance = new Image();

      instance.src = url;
      instance.onload = () => {
        setIsLoad(true);
      };
    }
  }, [url]);

  return (
    <div className={`image ${size}`}>
      {isLoad ? (
        <img src={url} />
      ) : (
        <div className="placeholder">
          <div className="shine" />
        </div>
      )}
    </div>
  );
}