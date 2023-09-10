import { useEffect } from 'react'

export default function ProductList() {
  useEffect(() => {
    console.log(1)
  }, [])
  return (
    <div>
      <h1>Hello</h1>
      <div className='flex'>
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </div>
    </div>
  )
}
