export default function getIdFromURL(url) {
  const split = url.split('/');
  return split[split.length - 2];
}
