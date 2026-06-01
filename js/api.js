const API_URL = "https://corretor-app-887273704154.southamerica-east1.run.app";

function obterToken() {
  return localStorage.getItem("token");
}

function salvarToken(token) {
  localStorage.setItem("token", token);
}

function removerToken() {
  localStorage.removeItem("token");
}