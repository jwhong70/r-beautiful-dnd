import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";
import { useForm } from "react-hook-form";
import { ITodo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";
// #3-2-3/#4-1-5
const Wrapper = styled.div`
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
// #4-1-10/#4-5-4
interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}
// #4-1-13
const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;
// #4-3-5
interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}
// #4-3-4/#4-3-6
const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThis
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;
// #4-5-5
const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  input {
    font-size: 16px;
    border: 0;
    background-color: white;
    width: 80%;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin: 0 auto;
  }
`;
// #4-5-7
interface IForm {
  toDo: string;
}
// #4-1-4/#4-1-9/#4-1-11
function Board({ toDos, boardId }: IBoardProps) {
  // #4-5-6
  const setToDos = useSetRecoilState(toDoState);
  // #4-5-8/#4-5-10
  const { register, handleSubmit, setValue } = useForm<IForm>();
  // #4-5-11
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newToDo, ...allBoards[boardId]],
      };
    });
    setValue("toDo", "");
  };
  return (
    // #4-1-6
    <Wrapper>
      {/* #4-1-14 */}
      <Title>{boardId}</Title>
      {/* #4-5-9/#4-5-12 */}
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      {/* #3-3-5/#3-3-7/#4-1-6/#4-1-12 */}
      <Droppable droppableId={boardId}>
        {/* #3-3-6/#3-3-11/#4-1-6/#4-3-1/#4-3-2/#4-3-3/#4-3-4 */}
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {/* #3-3-8/#3-4-4/#4-1-6/#4-5-13 */}
            {toDos.map((toDo, index) => (
              <DragabbleCard
                key={toDo.id}
                index={index}
                toDoId={toDo.id}
                toDoText={toDo.text}
              />
            ))}
            {/* #3-3-11/#4-1-6*/}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}
export default Board;
