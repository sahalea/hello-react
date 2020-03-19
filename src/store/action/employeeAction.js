import {
  FETCH_EMPLOYEE,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_ERROR
} from "../constant/actionType";

import api from "../../service/apiManager";

export const employeeRequested = () => {
  return {
    type: FETCH_EMPLOYEE,
    payload: {}
  };
};
export const employeeSuccess = data => {
  return {
    type: FETCH_EMPLOYEE_SUCCESS,
    payload: data
  };
};
export const employeeError = data => {
  return {
    type: FETCH_EMPLOYEE_ERROR,
    payload: data
  };
};

export const employeeGetAction = () => {
  return async dispatch => {
    dispatch(employeeRequested);
    try {
      const res = await api.getAllEmployees();
      dispatch(employeeSuccess(res));
    } catch (error) {
      dispatch(employeeError(error));
    }
  };
};
