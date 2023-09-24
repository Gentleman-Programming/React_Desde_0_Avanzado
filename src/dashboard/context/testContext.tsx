import { createContext, useContext, useReducer } from "react";

export interface Action<T> {
  type: string;
  payload: T;
}

export enum TestActionTypes {
  "REPLACE" = "aSDASDASD",
  "ADD_AGE" = "add_age",
  "ADD_NAME" = "add_name",
  "RESET" = "reset",
}

export interface TestState {
  name: string;
  age: number;
}

export const emptyTestState: TestState = {
  name: "",
  age: 0,
};

function TestReducer(state: TestState, action: Action<TestState>): TestState {
  switch (action.type) {
    case TestActionTypes.REPLACE:
      return action.payload;
    case TestActionTypes.ADD_AGE:
      return { ...state, age: action.payload.age };
    case TestActionTypes.ADD_NAME:
      return { ...state, name: action.payload.name };
    case TestActionTypes.RESET:
      return emptyTestState;
    default:
      return state;
  }
}

const TestContext = createContext({
  testState: emptyTestState,
  testDispatcher: (_action: Action<TestState>) => {},
});

export const TestProvider = ({ children }: { children: React.ReactNode }) => {
  const [testState, testDispatcher] = useReducer(TestReducer, emptyTestState);
  return (
    <TestContext.Provider value={{ testState, testDispatcher }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => {
  const context = useContext(TestContext);

  if (!context) {
    throw new Error("useTestContext must be used within a TestProvider");
  }

  return context;
};
