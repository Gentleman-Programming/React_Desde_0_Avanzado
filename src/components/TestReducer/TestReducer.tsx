import { useReducer } from "react";
import { ActionType } from "../../models";
import { reducer, initialState } from "./TestReducer.reducer";
// import styles from "./Test.module.scss";

export function Test() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: ActionType.INCREMENTCOUNT, payload: 1 })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({ type: ActionType.DECREMENTCOUNT, payload: 1 })
        }
      >
        Decrement
      </button>
      <p>{state.count}</p>
    </>
  );
}

// // REDUCE, sumatoria
// const arrayOfNumbers = [1, 2, 3, 4, 5];
//
// const sumReducer = (accumulator: number, currentValue: number) => {
//   return accumulator + currentValue;
// };
//
// console.log(arrayOfNumbers.reduce(sumReducer, 0));
//
// Reducer de estados
