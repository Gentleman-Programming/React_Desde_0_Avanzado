import { useEffect } from "react";
import { TestActionTypes, useTestContext } from "../context/testContext";
import { BorderBlack } from "./BorderBlack";
import { RedText } from "./RedText";

export const TestComponentePadre = () => {
  const callBack = () => {
    console.log("CallBack Padre");
  };
  const infoDelPadre = "Info del Padre";
  const infoPorContext = {
    name: infoDelPadre,
    age: 20,
  };
  const { testDispatcher } = useTestContext();

  useEffect(() => {
    testDispatcher({
      type: TestActionTypes.REPLACE,
      payload: infoPorContext,
    });
    testDispatcher({
      type: TestActionTypes.ADD_AGE,
      payload: { name: "", age: 20 },
    });
  }, []);

  return (
    <>
      <h2>TestComponentePadre</h2>

      <BorderBlack>
        <RedText>
          <p>Info del Padre: {infoDelPadre}</p>
          <button onClick={callBack}>CallBack</button>
        </RedText>
      </BorderBlack>
    </>
  );
};
