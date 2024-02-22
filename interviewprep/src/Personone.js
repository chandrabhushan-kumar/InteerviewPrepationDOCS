import React from 'react';
import UpdatedComponent from './Hoc'

const Personone = ({handleIncrease,money})=>{
    return(
        <>
        <h1>Updated Price :{money}</h1>
        <button onClick={handleIncrease}>Increase price</button>
        </>
    )
}
export default UpdatedComponent(Personone);