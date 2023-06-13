import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Workspace {
  id: string;
  name: string;
}

interface WorkspacesState {
  workspaces: Workspace[];
}

const initialState: WorkspacesState = {
  workspaces: [],
};

const workspacesSlice = createSlice({
  name: 'workspaces',
  initialState,
  reducers: {
    addWorkspace: (state, action: PayloadAction<Workspace>) => {
      state.workspaces.push(action.payload);
    },
    removeWorkspace: (state, action: PayloadAction<string>) => {
      state.workspaces = state.workspaces.filter(
        (workspace) => workspace.id !== action.payload
      );
    },
  },
});

export const { addWorkspace, removeWorkspace } = workspacesSlice.actions;

export default workspacesSlice.reducer;
