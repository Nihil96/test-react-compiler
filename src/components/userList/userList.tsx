import { User } from "../../App"

interface UserListProps {
  users: User[]
  onPromote: (id: number) => void
}
const UserList = ({ users, onPromote }: UserListProps) => {
  console.log("UserList rendered")

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {user.name} ({user.role}) - {user.age} years old
            <button onClick={() => onPromote(user.id)}>Promote</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
