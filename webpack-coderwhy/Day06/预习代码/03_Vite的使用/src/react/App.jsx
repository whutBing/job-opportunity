import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>React App: {count}</h2>
      <button onClick={e => setCount(count+1)}>+1</button>
    </div>
  )
}

export default App
