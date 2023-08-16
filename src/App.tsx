import { useEffect, useState } from 'react'
import './App.css'
import { Test } from './components';

function App() {
  const [a, setA] = useState(0);

  useEffect(() => {
    console.log('hola');
  }, [])

  return (
    <>
      <button onClick={() => setA(a + 1)}> Click</button >
      <Test><>{a}</></Test>
    </>
  )
}

export default App

