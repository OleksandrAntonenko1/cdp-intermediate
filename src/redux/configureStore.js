import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import coursesReducer from "./courses/reducer";
import authenticationReducer from "./authentication/reducer";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    isAuthenticated: authenticationReducer
  },
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== "production"
});

export default store;
