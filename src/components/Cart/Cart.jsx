import React, { useState } from 'react'
import Button from '../Cart/Button/Button'
import DecrementBtn from '../DecrementBtn/DecrementBtn'


const Cart = (props) => {
const [count, setCount] = useState(0)
  const {
    image, 
    title, 
    desc, 
    price, 
  } = props
  
  return (
    <div className='cart'>
      <img src={image} alt="image catalog" />
      <div className="block_title">
        <p className="title">
        {title}
        </p>ca
        <p className="desc">
        {desc}
        </p>
        <p className="price">
        {price}€
        </p>
      </div>
      <Button 
      count={count}
      setCount={setCount}
      titleBtn="+"
      />
      <DecrementBtn 
      count={count}
      setCount={setCount}
      titleBtn="-"
      />
    </div>
  )
}

export default Cart



// import React from 'react'
// import Button from './Button/Button.jsx'
// import DecrementBtn from '../DecrementBtn/DecrementBtn.jsx'
// const Cart = (props) => {
//   const { image, title, desc, price} = props

//   }
//   return (
//     <div className='cart'>
//       <img src={image} alt="image catalog" />
//       <div className="block_title">
//         <p className="title">
//           {title}
//         </p>
//         <p className="desc">
//           {desc}
//         </p>
//         <p className="price">
//           {price}€
//         </p>
//       </div>
//       <Button 
//       count={count}
//       setCount={setCount}
//       titleBtn="+"
//       />
//       <DecrementBtn 
//       count={count}
//       setCount={setCount}
//       titleBtn="-"
//       />
//     </div>
//   )

// export default Cart