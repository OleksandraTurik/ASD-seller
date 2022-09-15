export function debounce(f, ms) {
  let isCooldown = false;

  return function (...args) {
    if (isCooldown) return;

    f.apply(this, args);

    isCooldown = true;

    // eslint-disable-next-line no-return-assign
    setTimeout(() => isCooldown = false, ms);
  };
}
