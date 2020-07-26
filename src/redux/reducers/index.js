import { combineReducers } from "redux";
import user from "./user";
import datauser from "./datauser";
import dog from "./dog";
export default combineReducers({ user, datauser, dog });
