import { useEffect } from "react";

interface Props {
  children: JSX.Element
}

export function Test({ children }: Props) {
  useEffect(() => {
    console.log('test');
  }, [])

  return (
    <div style={{ color: 'red' }}>
      {children}
    </div>
  )
}

