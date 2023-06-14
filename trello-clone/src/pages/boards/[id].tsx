import React from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { RootState } from '../../store/store';
import { Board, addBoard, removeBoard } from '../../store/boardsSlice';
import store from '../../store/store';

const BoardPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const board = useSelector((state: RootState) => state.boards.boards.find((board:Board) => board.id == id)) || [];

  const dispatch = useDispatch();

  const handleAddBoard = () => {
    const newBoard = {
      id: id,
      name: `Доска ${id}-${Math.random().toString().slice(2, 6)}`,
      description: '123',
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
