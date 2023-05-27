import React from 'react'

const Cart =(props)=>{
    const {image,title,desc,price}=props
    return(
        <div className='cart'>g
            <img src={image} alt="image catalog" />
            <div className="block_title">
                <p className="title">{title}</p>
                <p className="desc">{desc}</p>
           <p className="price">{price}$</p>
            </div>
        </div>
    )
}

export default Cart