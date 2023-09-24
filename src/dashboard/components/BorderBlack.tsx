interface Props {
  children: React.ReactNode;
}

export const BorderBlack = ({ children }: Props) => {
  return <div style={{ border: "1px solid black" }}>{children}</div>;
};
