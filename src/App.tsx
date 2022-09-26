import styled from "styled-components";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import DragabbleCard from "./components/DragabbleCard";
// #3-2-1
const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
// #3-2-2
const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;
// #3-2-3
const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;
// #1-3
function App() {
  // #3-3-2
  const [toDos, setToDos] = useRecoilState(toDoState);
  // #3-3-3
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setToDos((oldToDos) => {
      const toDosCopy = [...oldToDos];
      toDosCopy.splice(source.index, 1);
      toDosCopy.splice(destination?.index, 0, draggableId);
      return toDosCopy;
    });
  };
  return (
    // #3-3-4
    <DragDropContext onDragEnd={onDragEnd}>
      {/* #3-3-4 */}
      <Wrapper>
        {/* #3-3-5 */}
        <Boards>
          {/* #3-3-5/#3-3-7 */}
          <Droppable droppableId="one">
            {/* #3-3-6/#3-3-11 */}
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {/* #3-3-8/#3-4-4 */}
                {toDos.map((toDo, index) => (
                  <DragabbleCard key={toDo} index={index} toDo={toDo} />
                ))}
                {/* #3-3-11 */}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}
export default App;
