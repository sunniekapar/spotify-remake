import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <Button onClick={() => setCount((count) => count + 1)}>Click me</Button>
      <p className="text-2xl font-semibold">{count}</p>
    </div>
  )
}
