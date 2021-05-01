import { useState } from 'react'
import { createModel} from 'hox'

export default createModel(function useCounter () {
  const [count, setCount] = useState(0)

  function increment () {
    setCount(count + 1)
  }

  function decrement () {
    setCount(count - 1)
  }

  return {
    count,
    increment,
    decrement
  }
})