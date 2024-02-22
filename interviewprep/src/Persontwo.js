import React from 'react';
import UpdatedComponent from './Hoc'

const Persontwo = ({handleIncrease,money})=>{
    return(
        <>
        <h1>Updated price :{money}</h1>
        <button onClick={handleIncrease}>Increase price</button>
        </>
    )
}
export default UpdatedComponent(Persontwo);