import { createReducer } from "redux-starter-kit";
import { login, logout } from "./actions";

export default createReducer(false, {
  [login]: () => true,
  [logout]: () => false
});
