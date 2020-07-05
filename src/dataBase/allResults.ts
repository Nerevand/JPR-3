import { customLocalStorage } from "../constants";

export const results: any = [
  { username: "Que", time: 55, score: 8, id: "Que-55" },
  { username: "Baran", time: 50, score: 8, id: "Baran-50" },
  { username: "Konan", time: 55, score: 9, id: "Konan-55" },
  { username: "Sara", time: 50, score: 9, id: "Sara-50" },
];

export const setResultToDataBase = (): void => {
  const data = localStorage.getItem("results");

  if (!data) {
    customLocalStorage.setItem("results", results);
  }
};
