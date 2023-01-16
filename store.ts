import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "slices/counterSlice";
// import snackbarReducer from "slices/snackbarSlice";
// ...

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // snackbar: snackbarReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;