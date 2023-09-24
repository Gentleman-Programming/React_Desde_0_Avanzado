import { useEffect } from "react";
import { useTestContext } from "../context/testContext";
import { BorderBlack } from "./BorderBlack";
import { RedText } from "./RedText";

export const TestComponentePadre = () => {
  const callBack = () => {
    console.log("CallBack Padre");
  };
  const infoDelPadre = "Info del Padre";
  const infoPorContext = "Info por context";
  const { setTestState } = useTestContext();

  useEffect(() => {
    setTestState(infoPorContext);
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
