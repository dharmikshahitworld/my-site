import React, { FC, useReducer } from "react";

const initialState = { count: 0 };
function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export const Counter: FC<object> = () => {
  return <div>Counter</div>;
};
