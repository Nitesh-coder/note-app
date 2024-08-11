
import { useState } from "react";
import  Board  from "./components/board"
import { CgMathPlus } from "react-icons/cg";

function App(){
  const [data, setData] = useState([])
  function onAddBtn(){
    setData([...data, 4] )
  }
  return(
    <div>
      <h1 className=" text-red-500 font-bold text-2xl flex justify-center p-4 mb-4 bg-slate-300 shadow-lg">Journal App</h1>
      <div className=" flex">
        <CgMathPlus size={100} color="blue" onClick={onAddBtn} />
        <ul className=" grid grid-cols-4 gap-5">
          {
            data.map(item=>
              (<li> <Board /> </li>))
          }
        </ul>
      </div>
    </div>
  )
}

export default App