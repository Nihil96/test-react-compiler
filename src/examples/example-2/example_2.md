# Exploring Component Rendering and Optimization

## Overview

In this example, we analyze the behavior of a simple `<App />` component and its child component `<UserCard />` with and without **React Compiler** optimizations. Here's how the application is structured:

1. **`<App />` Component**:

    - Maintains a `count` state.
    - Passes a `user` object and a `handleClick` callback as props to `<UserCard />`.
    - Includes a button to increment the `count` state.

2. **`<UserCard />` Component**:
    - Receives the `user` object and `handleClick` callback as props.
    - Displays the user's details (`name`, `age`, `role`).
    - Logs whenever it re-renders.

---

## Behavior Without Using React Compiler or Optimization Techniques

### Re-Renders on State Change

-   Updating the `count` state in `<App />` triggers a re-render of the `<UserCard />` component, even though it does not depend on `count`.
-   This happens because:
    -   The `user` object is re-created on every render of `<App />`, making it a new reference.
    -   The `handleClick` callback is also re-created on every render of `<App />`, as functions in JavaScript are not immutable by default.

### Performance Bottlenecks

-   The unnecessary re-renders of `<UserCard />` can cause performance degradation, especially in more complex applications with larger components or heavier computations.
-   Although `<UserCard />` logs "UserCard rendered" on every re-render, it should ideally render only when its props (`user` or `onButtonClick`) change.

---

## Optimization Using React.memo, useCallback, and useMemo

### React.memo

-   Wrapping `<UserCard />` with `React.memo` ensures it only re-renders when its props (`user` or `onButtonClick`) change.
    -   This prevents unnecessary re-renders caused by parent component updates unrelated to `<UserCard />`.

### useCallback

-   Using `useCallback` in `<App />` to memoize the `handleClick` function ensures the callback reference remains the same across renders unless its dependencies change.

### useMemo

-   Using `useMemo` in `<App />` to memoize the `user` object ensures its reference remains the same across renders unless its properties (`name`, `age`, `role`) change.

### Updated Code

Here’s the optimized code:

```jsx
const App = () => {
    const [count, setCount] = useState(0)

    const user = useMemo(
        () => ({
            name: "John Doe",
            age: 30,
            role: "Engineer",
        }),
        []
    )

    const handleClick = useCallback(() => {
        console.log("UserCard clicked!")
    }, [])

    console.log("App rendered")

    return (
        <div>
            <UserCard user={user} onButtonClick={handleClick} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

const UserCard = React.memo(({ user, onButtonClick }) => {
    console.log("UserCard rendered")

    return (
        <div onClick={onButtonClick} className="user-card">
            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>
            <p>Role: {user.role}</p>
        </div>
    )
})
```

### Result

These optimizations significantly improve the behavior of the application:

-   Incrementing the count state in <App /> no longer triggers a re-render of <UserCard />.
-   <UserCard /> re-renders only when its props (user or onButtonClick) change.

---

## Behavior with React Compiler

### Out-of-the-Box Optimizations

-   The React Compiler automatically memoizes the <UserCard /> component and ensures it does not re-render unnecessarily when the count state in <App /> changes.
-   The React Compiler automatically uses useMemo and useCallback optimizations under the hood to prevent unnecessary re-renders.
-   Incrementing the count state causes only the <App /> component to re-render, leaving <UserCard /> unaffected.

## Conclusion

In this simple example, React Compiler optimized the rendering behavior of the <UserCard /> component by automatically memoizing it and used useMemo and useCallback for the object and the callback function which were send as props.
