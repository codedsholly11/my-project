import React, {useState} from 'react'

const App = () => {
const [title, setTitle] = useState(0)
function addNum(){
  setTitle(title+1)
}
function subNum(){
  setTitle(title-1)
}

  return (
    <div className='flex flex-col justify-center items-center w-[100%] h-[100vh] gap-5 '>
      <h1 className='flex w-[10vw] h-[30px] bg-cyan-400 items-center justify-center rounded-md '>{title}</h1>
      <div className='flex gap-[30px]'>
        <button className='bg-red-400 rounded-sm px-5' onClick={addNum}>click me</button>
        <button className='bg-red-400 rounded-sm px-5' onClick={subNum}>click me</button>
      </div>

    </div>
  )
}

export default App
