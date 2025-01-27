import { useState } from "react"

interface User {
    id: number
    name: string
    age: number
    role: string
}

const AddUserForm = ({ onAddUser }: { onAddUser: (user: User) => void }) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [role, setRole] = useState("")

    console.log("AddUserForm rendered")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!name || !age || !role) return
        onAddUser({ id: Date.now(), name, age: Number(age), role })
        setName("")
        setAge("")
        setRole("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add User</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddUserForm
