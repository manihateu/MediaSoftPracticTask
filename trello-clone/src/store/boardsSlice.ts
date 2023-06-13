import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Board {
  id: string;
  name: string;
  description: string;
}

interface BoardsState {
  boards: Board[];
}

const initialState: BoardsState = {
  boards: [],
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<Board>) => {
        state.boards.push(action.payload);
    },
    removeBoard: (state, action: PayloadAction<string>) => {
        state.boards = state.boards.filter((board) => board.id !== action.payload);
    },
  },
});

export const { addBoard, removeBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
