import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route  path='/' exact element={<Home/>}></Route>
      <Route path='/Register' exact element={<Register />}></Route>


     </Routes>
    </>
  )
}

export default App
