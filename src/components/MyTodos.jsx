import React, { useMemo, useState ,useEffect} from 'react'
import SkillMemo from './SkillMemo';
const MyTodos = () => {
    const [todo,setTodo]=useState(["New Todo"]);
    const [count,setCount]=useState(0);

    // const useEffect(()=>{
    //     const addTodo=()=>{
    //         console.log("addtodo")
    //         setTodo([...todo,"New Todo"])
    //     }
    // },[todo])
    const addTodo=()=>{
        console.log("addtodo")
        setTodo([...todo,"New Todo"])
    }
    console.log(count);

    const expensiveFunction=(num)=>{
       for(let i=0;i<=10000;i++){
        num+=i
       }
       console.log("expense")
       return num
    }
    
    const increment=()=>{
        setCount(count+1)
    }
    const expense=useMemo(()=>{
        console.log("expense")
       return expensiveFunction(count)
    },[count])
    
  return (
    <div>
        <h1>React.useMemo</h1>
        <div>
            <h1>My Todos</h1>
            {
                todo.map((item,index)=> <div key={index}>{item}</div> )
            }
            <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />

        <div>
            Count : -{count} <button onClick={increment}>+</button>
        </div>
        
        <div>
         <h2>Expensive Calculation</h2>
         <p>{expense}</p>
        </div>
        <hr />
        <hr />
        <div>
            <h2>React.memo</h2>
            <SkillMemo/>
        </div>
    </div>
  )
}

export default MyTodos