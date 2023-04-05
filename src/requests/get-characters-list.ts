export async function getCharacters(search: string | null) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Allow-Origin', '*');
  headers.append('Authorization', 'Bearer NdfdxJjAkcw5LALuf2Kn');

  const response = await fetch('https://the-one-api.dev/v2/character?limit=50&name=' + search, {
    method: 'GET',
    headers,
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}
