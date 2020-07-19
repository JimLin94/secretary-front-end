export default function debounce(fn: () => void, delay: number) {
  let timer: number = null;

  return function() {
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    // @ts-ignore
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}
