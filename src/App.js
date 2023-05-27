import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart'
import image1 from './assets/cart/image1.jpg'
import image2 from './assets/cart/image2.jfif'
import image3 from './assets/cart/image3.jfif'
import image4 from './assets/cart/image4.jfif'
import image5 from './assets/cart/image5.jfif'
import image6 from './assets/cart/image6.jfif'
import image7 from './assets/cart/image7.jfif'
import image8 from './assets/cart/image8.jfif'
const products =[
  {
    image:image1,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
  {
    image:image2,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
  {
    image:image3,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  }, 
  {
    image:image4,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
  {
    image:image5,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
  {
    image:image6,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
  {
    image:image7,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
  {
    image:image8,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
]

function App() {
  return (
    <div className="app">
      {
        products.map(product=>(
<Cart
image={product.image}
title={product.title}
desc={product.desc}
price={product.price}
  />
        ))    
          }
    </div>
  );
}

export default App;
