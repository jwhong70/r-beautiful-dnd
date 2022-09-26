import { atom } from "recoil";
// #3-3-1
export const toDoState = atom({
  key: "toDo",
  default: ["a", "b", "c", "d", "e", "f"],
});
