// const API_URL = "https://localhost:44313/api/";
const API_URL = "https://bi-dict-api20210206231826.azurewebsites.net/api/";
export default function sendRequest(path: string) {
  return fetch(`${API_URL}${path}`);
}