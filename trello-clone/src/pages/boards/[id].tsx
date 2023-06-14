import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { RootState } from '../../store/store';
import { Board, addBoard, removeBoard } from '../../store/boardsSlice';
import store from '../../store/store';

const BoardPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const board = useSelector((state: RootState) => state.boards.boards.find((board:Board) => board.id == id)) || null;

  const dispatch = useDispatch();

  const handleAddBoard = (name: string, description:string): void => {
    const newBoard: Board = {
      id: "" + id,
      name: name,
      description: description,
    };
    dispatch(addBoard(newBoard));
  };

  const handleRemoveBoard = (boardId: string) => {
    dispatch(removeBoard(boardId));
  };

  if (!board) {
    return (
      <>
        <div>Доска не найдена</div>
        <div className='mt-6'>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Введи название доски</label>
        <input type="text" id="name" onChange={(e) => {setName(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
      </div>
      <div className='mt-6'>
        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900">Введи описание доски</label>
        <input type="text" id="desc" onChange={(e) => {setDesc(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
      </div>
      <button className='mt-2' onClick={() => {handleAddBoard(name, desc)}}>
        Добавить доску
      </button>
      <button
        className="mt-2 text-sm text-red-500"
        onClick={() => handleRemoveBoard(board.id)}
      >
        Удалить доску
      </button>
      </>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{board.name}</h1>
      <p>{board.description}</p>
      <div className={board.name == null ? 'mt-6' : 'hidden'}>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Введи название доски</label>
        <input type="text" id="name" onChange={(e) => {setName(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
      </div>
      <div className={board.name == null ? 'mt-6' : 'hidden'}>
        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900">Введи описание доски</label>
        <input type="text" id="desc" onChange={(e) => {setDesc(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
      </div>
      <button className={board.name == null ? 'mt-2' : 'hidden'} onClick={() => {handleAddBoard(name, desc)}}>
        Добавить доску
      </button>
      <button
        className={board.name != null ? "mt-2 text-sm text-red-500" : 'hidden'}
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
