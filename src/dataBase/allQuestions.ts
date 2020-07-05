type Question = {
  id: number;
  title: string;
};

type Questions = {
  id: number;
  title: string;
  content?: any;
  isCorrect: string;
  answer?: string;
  questions: Array<Question>;
};
const randomizer = (): number => Math.random();

export const data: Array<Questions> = [
  {
    id: randomizer(),
    title: "Чему равно это выражение?",
    content: 0,
    isCorrect: "Error",
    questions: [
      {
        id: randomizer(),
        title: "3,1",
      },
      {
        id: randomizer(),
        title: "1,2,3",
      },
      {
        id: randomizer(),
        title: "3,1,2",
      },
      {
        id: randomizer(),
        title: "Error",
      },
    ],
  },
  {
    id: randomizer(),
    title: "Что выведет этот код?",
    content: 1,
    isCorrect: "1",
    questions: [
      {
        id: randomizer(),
        title: "0",
      },
      {
        id: randomizer(),
        title: "1",
      },
      {
        id: randomizer(),
        title: "2",
      },
      {
        id: randomizer(),
        title: "Error",
      },
    ],
  },
  {
    id: randomizer(),
    title: "Что выведет alert?",
    content: 2,
    isCorrect: "Error",
    questions: [
      {
        id: randomizer(),
        title: "Hello",
      },
      {
        id: randomizer(),
        title: "undefined",
      },
      {
        id: randomizer(),
        title: "null",
      },
      {
        id: randomizer(),
        title: "Error",
      },
    ],
  },
  {
    id: randomizer(),
    title: "Есть ли разница между вызовами i++ и ++i?",
    isCorrect: "Разница в значении, которое возвращает такой вызов.",
    questions: [
      {
        id: randomizer(),
        title: "Разница в значении, которое возвращает такой вызов.",
      },
      {
        id: randomizer(),
        title: "Разница в значении i после вызова.",
      },
      {
        id: randomizer(),
        title: "Нет никакой разницы.",
      },
    ],
  },
  {
    id: randomizer(),
    title: "Что выведет этот код?",
    content: 3,
    isCorrect: "null",
    questions: [
      {
        id: randomizer(),
        title: "null",
      },
      {
        id: randomizer(),
        title: "undefined",
      },
      {
        id: randomizer(),
        title: "other",
      },
      {
        id: randomizer(),
        title: "Error",
      },
    ],
  },
  {
    id: randomizer(),
    title: "Что выведет этот код?",
    content: 4,
    isCorrect: "10 раз число 10.",
    questions: [
      {
        id: randomizer(),
        title: "Числа от 0 до 9.",
      },
      {
        id: randomizer(),
        title: "Числа от 0 до 10.",
      },
      {
        id: randomizer(),
        title: "10 раз число 0.",
      },
      {
        id: randomizer(),
        title: "10 раз число 10.",
      },
      {
        id: randomizer(),
        title: "Error",
      },
    ],
  },
  {
    id: randomizer(),
    title: "Есть ли различия между проверками:",
    content: 5,
    isCorrect:
      "Да, существует значение x, для которого они работают по-разному.",
    questions: [
      {
        id: randomizer(),
        title:
          "Да, существует значение x, для которого они работают по-разному.",
      },
      {
        id: randomizer(),
        title: "Нет, они полностью взаимозаменяемы.",
      },
      {
        id: randomizer(),
        title: "Зависит от браузера.",
      },
    ],
  },
  {
    id: randomizer(),
    title: "Какой результат будет у выражения ниже?",
    content: 6,
    isCorrect: "2",
    questions: [
      {
        id: randomizer(),
        title: "0",
      },
      {
        id: randomizer(),
        title: "1",
      },
      {
        id: randomizer(),
        title: "2",
      },
      {
        id: randomizer(),
        title: "undefined",
      },
      {
        id: randomizer(),
        title: "NaN",
      },
    ],
  },
  {
    id: randomizer(),
    title: "Что выведет код ниже?",
    content: 7,
    isCorrect: "0, затем 1.",
    questions: [
      {
        id: randomizer(),
        title: "1, затем 0.",
      },
      {
        id: randomizer(),
        title: "0, затем 1.",
      },
      {
        id: randomizer(),
        title: "Error",
      },
    ],
  },
  {
    id: randomizer(),
    title: "Что делает код:",
    content: 8,
    isCorrect: "Выходит из текущего блока цикла или switch на метку «me».",
    questions: [
      {
        id: randomizer(),
        title: "Ломает интерпретатор javascript.",
      },
      {
        id: randomizer(),
        title: "Выходит из текущего блока цикла или switch на метку «me».",
      },
      {
        id: randomizer(),
        title: "Выдает ошибку.",
      },
    ],
  },
  {
    id: randomizer(),
    title: "Что выведет этот код?",
    content: 9,
    isCorrect: "false",
    questions: [
      {
        id: randomizer(),
        title: "undefined",
      },
      {
        id: randomizer(),
        title: "false",
      },
      {
        id: randomizer(),
        title: "true",
      },
    ],
  },
  {
    id: randomizer(),
    title: "Что выведет alert?",
    content: 10,
    isCorrect: "Error",
    questions: [
      {
        id: randomizer(),
        title: "5",
      },
      {
        id: randomizer(),
        title: "undefined",
      },
      {
        id: randomizer(),
        title: "Error",
      },
    ],
  },
];
