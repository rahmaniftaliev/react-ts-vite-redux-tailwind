import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppSelector, useAppDispatch } from './store/hooks'
import { increment, decrement, incrementByAmount, reset } from './store/features/counter/counterSlice'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Redux Toolkit</h1>
      <div className="card">
        <div style={{ marginBottom: '20px' }}>
          <h2>Counter: {count}</h2>
        </div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
          <button onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button onClick={() => dispatch(incrementByAmount(5))}>
            Add 5
          </button>
          <button onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
