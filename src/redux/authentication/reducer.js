import { createReducer } from "redux-starter-kit";
import { login, logout } from "./actions";

export default createReducer(true, {
  [login]: () => true,
  [logout]: () => false
});
