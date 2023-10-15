import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main class="container">
        <h1>Welcome to Hactoberfest 23</h1>
        <p>This is a simple boiler plate. You should edit or make changes to this.</p>
        <div class="animation-box">
          <img src="https://avatars.githubusercontent.com/u/71394119?s=200&v=4" alt="" />
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
