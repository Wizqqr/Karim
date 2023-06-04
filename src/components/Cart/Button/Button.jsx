import React,{useState} from 'react'
import './Button.css'

const Button = (props) => {
  const {titleBtn,count,setCount}=props
const increment=()=>{
  setCount(count+1)
}
  
 return (
 <>
 <p>Count:{count}</p>
 <button className="full-rounded" onClick={increment}></button>
 <span>{titleBtn}</span>
 <div className="border full-rounded"></div>
 </>
 )
}

export default Button