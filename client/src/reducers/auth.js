import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { AuthData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, AuthData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, AuthData: null };

    default:
      return state;
  }
};

export default authReducer;
