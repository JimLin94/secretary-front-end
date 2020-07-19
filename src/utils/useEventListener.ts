import { useEffect, useRef } from 'react';

export default function useEventListener(eventName: string, handler: (e: Event) => void, element: any = window) {
  const savedHandler = useRef<(param: any) => void>();

  useEffect(() => {
    // @ts-ignore
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      const eventListener = (event: Event) => savedHandler.current(event);

      element.addEventListener(eventName, eventListener);

      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element]
  );
}
