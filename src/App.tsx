import { useState } from "react"
import "./App.css"
import UserCard from "./components/userCard/userCard"

function App() {
    const [clickCount, setClickCount] = useState(0)

    const user = {
        name: "John Doe",
        age: 35,
        profession: "Software Engineer",
    }

    const handleCardClick = () => {
        console.log("Card Clicked")
    }

    console.log("App rendered")
    return (
        <div>
            <UserCard user={user} handleCardClick={handleCardClick} />

            <button onClick={() => setClickCount(clickCount + 1)}>
                Increment
            </button>
        </div>
    )
}

export default App
