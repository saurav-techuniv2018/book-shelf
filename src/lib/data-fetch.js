const httpRequest = async (url, method) => {
  const response = await fetch(url, { method });
  const json = await response.text();
  const data = JSON.parse(json);

  return data;
};

export default httpRequest;
