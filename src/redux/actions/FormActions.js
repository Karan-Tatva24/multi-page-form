import { ActionTypes } from "../contants/action-types";

export const updateFormField = (payload) => {
  return {
    type: ActionTypes.UPDATE_FORM_FIELD,
    payload: payload,
  };
};

export const submitForm = () => {
  return {
    type: ActionTypes.SUBMIT_FORM_DATA,
  };
};
