// src/rest.ts
//const API_ROOT = "http://localhost:3000/api";

const SERVER_ROOT = window.location.origin;

export function serverPath(path: string) {
  return `${SERVER_ROOT}${path}`;
}