import { data } from "../../dataBase/allQuestions";

const useSetAnswers: any = (): any => {
  const arr = [];
  while (arr.length < 10) {
    var r: any = Math.floor(Math.random() * data.length);
    if (arr.indexOf(data[r]) === -1) arr.push(data[r]);
  }
  return arr;
};

export default useSetAnswers;
