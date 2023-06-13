import React from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { RootState } from '../../store/store';
import { addBoard, removeBoard } from '../../store/boardsSlice';
import store from '../../store/store';

const BoardPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const boards = useSelector((state: RootState) => state.boards.boards);
  const board = boards.find((board) => board.id == id);
  console.log(boards)

  const dispatch = useDispatch();

  const handleAddBoard = () => {
    const newBoard = {
      id: Math.random().toString(),
      name: `Доска ${id}-${Math.random().toString().slice(2, 6)}`,
      description: '',
    };
    dispatch(addBoard(newBoard));
  };

  const handleRemoveBoard = (boardId: string) => {
    dispatch(removeBoard(boardId));
  };

  if (!board) {
    return <div>Доска не найдена</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{board.name}</h1>
      <p>{board.description}</p>
      <button className="mt-4" onClick={handleAddBoard}>
        Добавить доску
      </button>
      <button
        className="mt-2 text-sm text-red-500"
        onClick={() => handleRemoveBoard(board.id)}
      >
        Удалить доску
      </button>
    </div>
  );
};

const WrappedBoardPage = () => (
  <Provider store={store}>
    <BoardPage />
  </Provider>
);

export default WrappedBoardPage;
