interface User {
    name: string
    age: number
    profession: string
}

interface UserCardProps {
    user: User
    handleCardClick: () => void
}

const UserCard = ({ user, handleCardClick }: UserCardProps) => {
    console.log("UserCard rendered")

    return (
        <div onClick={handleCardClick} className="user-card">
            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>
            <p>Role: {user.profession}</p>
        </div>
    )
}

export default UserCard
