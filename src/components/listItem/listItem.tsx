import { memo } from "react"
import HeavyComponent from "../heavyComp/heavyComp"

interface ItemListProps {
  id: number
  done: boolean
  text: string
  toggleTask: (id: number[]) => void
}

const ItemList: React.FC<ItemListProps> = ({ id, done, text, toggleTask }) => {
  console.log(`ItemList rendered: ${id}`)

  return (
    <>
      <div className={`task-item ${done ? "done" : ""}`}>
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggleTask([id])}
        />
        <span>{text}</span>
      </div>
      <HeavyComponent />
    </>
  )
}

export default ItemList
