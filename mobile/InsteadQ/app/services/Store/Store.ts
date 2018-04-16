import { createStore } from "Redux";
import { RootReducer } from "../Store/rootReducer";


export const store = createStore(RootReducer);
