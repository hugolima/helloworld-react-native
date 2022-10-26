export const getMovies = async () => {
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(() => fetchApi('https://reactnative.dev/movies.json'));
}

const fetchApi = async (url, options = {}) => {
  const resp = await fetch(url, options).catch(e => {
    throw new Error(e);
  })

  const data = await resp.json().catch(() => {
    // Garante que sempre será retornado um JSON (mesmo que seja um JSON vazio)
    return Promise.resolve({});
  })

  if (resp.status === 200 || resp.status === 201) {
    return data;
  }

  return {};
}