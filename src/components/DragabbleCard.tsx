import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
// #3-2-4/#3-4-2
const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;
// #3-4-5
interface IDragabbleCardProps {
  toDo: string;
  index: number;
}
// #3-4-1/#3-4-4/#3-4-6
function DragabbleCard({ toDo, index }: IDragabbleCardProps) {
  return (
    // #3-3-8/#3-3-10/#3-4-3
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {/* #3-3-9/#3-3-12 */}
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}
// #3-5
export default React.memo(DragabbleCard);
