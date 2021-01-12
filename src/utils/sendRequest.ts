const API_URL = "https://localhost:44313/api/";
export default function sendRequest(absolutePath: string) {
  return fetch(`${API_URL}${absolutePath}`);
}