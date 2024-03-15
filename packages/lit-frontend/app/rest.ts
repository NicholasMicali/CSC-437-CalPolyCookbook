// src/rest.ts
//const API_ROOT = "http://localhost:3000/api";

const API_ROOT = window.location.origin + "/api";

export function serverPath(path: string) {
  console.log(API_ROOT);
  return `${API_ROOT}${path}`;
}