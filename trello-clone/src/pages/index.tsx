import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { RootState } from '../store/store';
import { addWorkspace, removeWorkspace } from '../store/workspacesSlice';
import store from '../store/store';

const WorkspaceSelectionPage = () => {
  const workspaces = useSelector((state: RootState) => state.workspaces.workspaces);
  const dispatch = useDispatch();

  const handleAddWorkspace = () => {
    const newWorkspace = {
      id: Math.random().toString(),
      name: `Новая рабочая область ${workspaces.length + 1}`,
    };
    dispatch(addWorkspace(newWorkspace));
  };

  const handleRemoveWorkspace = (workspaceId: string) => {
    dispatch(removeWorkspace(workspaceId));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Выберите рабочую область</h1>
      <button className="mb-4" onClick={handleAddWorkspace}>
        Добавить рабочую область
      </button>
      <ul>
      {workspaces.map((workspace) => (
  <li key={workspace.id} className="mb-2">
    <Link href={`/boards/${workspace.id}`}>
      {workspace.name}
    </Link>
    <button
      className="ml-2 text-sm text-red-500"
      onClick={() => handleRemoveWorkspace(workspace.id)}
    >
      Удалить
    </button>
  </li>
))}
      </ul>
    </div>
  );
};

const WrappedWorkspaceSelectionPage = () => (
  <Provider store={store}>
    <WorkspaceSelectionPage />
  </Provider>
);

export default WrappedWorkspaceSelectionPage;
