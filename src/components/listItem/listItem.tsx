import { memo } from "react"
import HeavyComponent from "../heavyComp/heavyComp"

interface ItemListProps {
  id: number
  done: boolean
  text: string
  toggleTask: (id: number[]) => void
}

// Here memo is needed to prevent re-rendering all of the other items when a single item is toggled.
const ItemList: React.FC<ItemListProps> = memo(
  ({ id, done, text, toggleTask }) => {
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
)

export default ItemList
