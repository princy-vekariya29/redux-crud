import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementAsync } from '../../Services/Action/CounterAction'


function Counter() {

    // const [count, setCount] = useState(0)
    const {count , isload , error} = useSelector(state => state.counter_Reducer)
    const dispatch = useDispatch()

    const handleCount = ()=>{
        // console.log("click");
        dispatch(incrementAsync());
    }
  return (
   <>
    <h1>
        {
            isload ? "loading..." : error ? error : count
        }
    </h1>

    <button onClick={handleCount}>
        Add
    </button>


   </>
  )
}

export default Counter
