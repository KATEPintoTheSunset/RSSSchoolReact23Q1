export default function (date: string | undefined): boolean {
  if (date === undefined || date === '') {
    return false;
  }
  return true;
}
