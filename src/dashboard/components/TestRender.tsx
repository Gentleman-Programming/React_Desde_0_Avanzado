import { memo, useEffect } from "react";

interface TestRenderProps {
  callBack?: () => void;
}

export const TestRender = memo(function ({ callBack }: TestRenderProps) {
  useEffect(() => {
    console.log("TestRender");
  }, [callBack]);

  return (
    <div>
      TestRender: <button onClick={callBack}>+</button>
    </div>
  );
});
