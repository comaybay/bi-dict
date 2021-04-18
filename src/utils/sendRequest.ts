const API_URL = "https://localhost:44313/api/";
export default function sendRequest(path: string) {
  return fetch(`${API_URL}${path}`);
}