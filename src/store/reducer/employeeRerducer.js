import {
  FETCH_EMPLOYEE,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_ERROR
} from "../constant/actionType";

const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE: {
      return {
        ...state
      };
    }
    case FETCH_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        employee: action.payload
      };
    }
    case FETCH_EMPLOYEE_ERROR: {
      return {
        ...state,
        employee: null
      };
    }
    default:
      return state;
  }
};

export default employeeReducer;
