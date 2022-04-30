import axios from "axios";
import userSlice from "../slices/user/userSlice";
import { store } from "../store";
import { api } from "./apiEndPoints";
import { toast } from "react-toastify";
import { UserInterface } from "../../commons/userInterface";
import usersSlice from "../slices/user/usersSlice";

const retrieveAllUsersInfo = (next?: Function) => {
  const url = api.user;

  axios
    .get(url)
    .then((response) => {
      store.dispatch(usersSlice.actions.setData(response.data));
      if (typeof next === "function") {
        next(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error retrieving user info");
    });
};

export default retrieveAllUsersInfo;
