import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="root" className="max-w-[1280px] p-8 text-center bg-gray-900 ml-auto">
      <div className="flex justify-center gap-6 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-24 p-6 transition duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-24 p-6 transition duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]"
          />
        </a>
      </div>

      <h1 className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
        Vite + React
      </h1>

      <div className="card p-8 bg-gray-900 dark:bg-[#1a1a1a] rounded-xl shadow-md border border-[#E7E7E7]">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-white dark:bg-[#1a1a1a] text-indigo-600 dark:text-white border border-transparent hover:border-indigo-400 font-semibold px-6 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          count is {count}
        </button>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Edit <code className="font-mono text-indigo-500">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-10 text-gray-500 dark:text-gray-400 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
