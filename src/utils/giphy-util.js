export function debounce(callback, delay) {
  let timer;
  return function () {
    const args = arguments;
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => callback.apply(context, args), delay);
  };
}
