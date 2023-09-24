import { createContext, useContext, useState } from "react";

const TestContext = createContext({
  testState: "",
  setTestState: (_state: string) => {},
});

export const TestProvider = ({ children }: { children: React.ReactNode }) => {
  const [testState, setTestState] = useState("");
  return (
    <TestContext.Provider value={{ testState, setTestState }}>
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
