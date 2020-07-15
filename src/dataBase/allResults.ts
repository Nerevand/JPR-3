import { customLocalStorage } from "../constants";

type User = {
  username: string;
  time: number;
  score: number;
  id: string;
};

export const results: Array<User> = [
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
