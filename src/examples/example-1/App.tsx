import { useState } from "react"
import "./App.css"
import Header from "../../components/header/header"
import List from "../../components/list/list"

function App() {
  const [count, setCount] = useState(0)
  console.log("App re-rendered")

  return (
    <>
      <Header />
      <List />

      <button onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
    </>
  )
}

export default App
