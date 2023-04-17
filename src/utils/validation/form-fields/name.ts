export default function (name: string | undefined): boolean {
  if (name === undefined) {
    return false;
  }
  if (name.trim().length === 0 || name.slice(0, 1) !== name.slice(0, 1).toUpperCase()) {
    return false;
  }
  return /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(name);
}
