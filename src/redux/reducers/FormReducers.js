import { ActionTypes } from "../contants/action-types";

const initialState = {
  firstname: "",
  lastname: "",
  gender: "",
  email: "",
  phone: "",
  password: "",
  confirmpassword: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_FORM_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    case ActionTypes.SUBMIT_FORM_DATA:
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default formReducer;
