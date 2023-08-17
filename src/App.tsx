import { useEffect, useState } from 'react'
import './App.css'
import { Test } from './components';

function App() {
  const [a, setA] = useState(0);

  const handleClick = () => {
    setA(a + 1);
  }

  useEffect(() => {
    console.log('App');
  });

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <Test>{a}</Test>
    </>
  )
}

export default App
