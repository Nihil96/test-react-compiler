const HeavyComponent: React.FC = () => {
  console.log("HeavyComponent rendered")

  // Simulate a computationally expensive operation
  const performHeavyComputation = () => {
    let total = 0
    for (let i = 0; i < 1e8; i++) {
      total += i
    }
    return total
  }

  const result = performHeavyComputation()

  return (
    <div>
      <h2>Heavy Component</h2>
      <p>Result of heavy computation: {result}</p>
    </div>
  )
}

export default HeavyComponent
