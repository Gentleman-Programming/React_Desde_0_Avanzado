import { useTestContext } from "../context/testContext";

interface Props {
  children: React.ReactNode;
}

export const RedText = ({ children }: Props) => {
  const { testState } = useTestContext();

  return (
    <div style={{ color: "red" }}>
      {testState}
      {children}
    </div>
  );
};
