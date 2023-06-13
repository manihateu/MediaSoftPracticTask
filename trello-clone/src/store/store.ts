import { configureStore } from '@reduxjs/toolkit';
import workspacesReducer from './workspacesSlice';
import boardsReducer from './boardsSlice';

const store = configureStore({
  reducer: {
    workspaces: workspacesReducer,
    boards: boardsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
