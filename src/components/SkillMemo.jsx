import { memo, useState } from "react";

const AddSkills=()=>{
  
    const [items,setItems]=useState([])
    const [input,setInput]=useState("");

    const addItem=()=>{
        if(input.length>=5){
          setItems([...items,input])
        }else alert("skill length is less")
        
    }
    return (
        <div>
            <input type="text" onChange={(e)=>setInput(e.target.value)} />
            <button onClick={addItem}>Add skill</button>
        <ul>
        {
         items.map((item,index)=> <li key={index}>{item}</li> )
        }
        </ul>
        </div>
    )
}

export default memo(AddSkills)