import React, { useCallback, useState } from "react"
import ItemList from "../listItem/listitem"

import "./list.css"

const items = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  text: `Task ${i + 1}`,
  done: false,
}))

const List: React.FC = () => {
  const [tasks, setTasks] = useState(items)

  const toggleTasks = useCallback((ids: number[]) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        ids.includes(task.id) ? { ...task, done: !task.done } : task
      )
    )
  }, [])

  console.log("List rendered")

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <ItemList
          key={task.id}
          text={task.text}
          toggleTask={toggleTasks}
          id={task.id}
          done={task.done}
        />
      ))}
    </div>
  )
}

export default List
