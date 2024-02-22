import { createStore } from "redux";
import rootReducers from "./myindex";

const store = createStore(rootReducers);
export default store;