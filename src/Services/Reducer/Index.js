import { combineReducers } from "redux";
import Emp_re from "./EmployeeReducer";
import { counter_Reducer } from "./CounterReducer";
import { SagaCount } from "./CountReducer";
import { Authreducer } from "./AuthReducer";

export const mainReducer = combineReducers({

    Emp_re,
    counter_Reducer,
    SagaCount,
    Authreducer
}
) 