import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={()=>setcolor("red")}
            style={{backgroundColor:"red"}}
            >Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onClick={()=>setcolor("yellow")}
            style={{backgroundColor:"yellow"}}
            >yellow</button>
            <button 
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
  onClick={() => setcolor("blue")} 
  style={{ backgroundColor: "blue" }}
>
  Blue
</button>
<button 
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
  onClick={() => setcolor("green")} 
  style={{ backgroundColor: "green" }}
>
  Green
</button>
<button 
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
  onClick={() => setcolor("purple")} 
  style={{ backgroundColor: "purple" }}
>
  Purple
</button>
<button 
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
  onClick={() => setcolor("orange")} 
  style={{ backgroundColor: "orange" }}
>
  Orange
</button>
<button 
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
  onClick={() => setcolor("pink")} 
  style={{ backgroundColor: "pink", color: "black" }}
>
  Pink
</button>
<button 
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
  onClick={() => setcolor("brown")} 
  style={{ backgroundColor: "brown" }}
>
  Brown
</button>
<button 
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
  onClick={() => setcolor("teal")} 
  style={{ backgroundColor: "teal" }}
>
  Teal
</button>
<button 
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
  onClick={() => setcolor("lime")} 
  style={{ backgroundColor: "lime", color: "black" }}
>
  Lime
</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
