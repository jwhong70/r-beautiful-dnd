import { atom } from "recoil";
//#4-1-2/#4-5-3
interface IToDoState {
  [key: string]: ITodo[];
}
// #3-3-1/#4-1-1/#4-1-3/#4-5-1
export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
// #4-5-2
export interface ITodo {
  id: number;
  text: string;
}
