export default function (img: FileList | null | undefined): boolean {
  if (img === undefined || img === null || img?.length === 0) {
    return false;
  }
  return true;
}
