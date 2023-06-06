import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TripList from './components/TripList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TripList />
      </div>
    </>
  )
}

export default App
