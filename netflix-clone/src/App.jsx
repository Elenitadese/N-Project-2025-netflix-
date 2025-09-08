import { useState } from 'react'
import './App.css'
import Home from './Page/Home/Home'
import TestFile from './Component/TestFile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Home/>
<TestFile/>
    
    </>
  )
}

export default App
