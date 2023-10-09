import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Inc } from '../../Services/Action/SagaAction'

function SagaCounter() {

    const dispatch = useDispatch()

    const {count} = useSelector(state => state.SagaCount);

    const handleClick = () =>{
        dispatch(Inc())
    }
    return (

        <>
            <div className='text-center py-4'>
                SagaCounter


                <h1>
                    {count}
                </h1>


                <button onClick={handleClick}>
                    Add +
                </button>

            </div>


        </>

    )
}

export default SagaCounter
