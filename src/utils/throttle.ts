export default function throttle(fn: () => void, delay: number) {
  let wait: boolean = false;

  return function() {
    if (!wait) {
      const context = this;
      const args = arguments;

      fn.apply(context, args);

      setTimeout(function() {
        wait = false;
      }, delay);
    }
  };
}