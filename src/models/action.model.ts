export enum ActionType {
  INCREMENTCOUNT = "incrementCount",
  DECREMENTCOUNT = "decrementCount",
}

export interface Action {
  type: ActionType;
  payload: number;
}
