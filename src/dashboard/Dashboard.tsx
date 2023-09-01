import { useCallback, useEffect, useState } from "react";
import { TestRender } from "./components";

export const Dashboard = () => {
  // const [param] = useState(1000000000);
  const [render, setRender] = useState(false);

  // const expensiveValue = useMemo(() => {
  //   let result = 0;
  //
  //   for (let i = 0; i < param; i++) {
  //     result += i;
  //   }
  //
  //   return result;
  // }, [param]);

  const handleClick = useCallback(() => {
    setRender(!render);
  }, []);

  useEffect(() => {
    console.log("Dashboard");
  }, [render]);

  return (
    <>
      {/* {expensiveValue} */}
      <TestRender callBack={handleClick} />
    </>
  );
};
