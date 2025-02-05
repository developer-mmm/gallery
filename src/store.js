import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./app/userSlice";
import todosReducer from "./app/todosSlice";
import likedReducer from './app/likedSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer,
    liked: likedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "user/login",
          "user/isAuthChange",
          "user.user",
          "todo/setSelectedTodo",
        ],
        ignoredPaths: ["user.user", "todos.SelectedTodo.createdAt"],
      },
    }),
});
