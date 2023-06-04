import React from 'react'
import '../Cart/Button/Button.css'

const DecrementBtn = props => {
 const { titleBtn, count, setCount } = props

 const decrement = () => {
  setCount(count <= 0 ? count : count - 1)
 }

 return (
  <>
   <button className='full-rounded' onClick={decrement}>
    <span>{titleBtn}</span>
    <div className='border full-rounded'></div>
   </button>
   
  </>
 )
}

export default DecrementBtn