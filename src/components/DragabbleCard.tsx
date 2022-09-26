import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

// #3-2-4/#3-4-2/#4-4-3
const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;
// #3-4-5/#4-5-14
interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}
// #3-4-1/#3-4-4/#3-4-6/#4-5-15
function DragabbleCard({ toDoId, toDoText, index }: IDragabbleCardProps) {
  return (
    // #3-3-8/#3-3-10/#3-4-3/#4-5-15
    <Draggable draggableId={String(toDoId)} index={index}>
      {/* #3-3-9/#3-3-12/#3-4-3/#4-4-1/#4-4-2/#4-5-15 */}
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}
// #3-5
export default React.memo(DragabbleCard);
