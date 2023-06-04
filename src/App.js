












import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart.jsx'
import Header from './components/Header/Header'
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
    id:1,
    image:image1,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
  {
    id:2,
    image:image2,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
  {
    id:3,
    image:image3,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  }, 
  {
    id:4,
    image:image4,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
  {
    id:5,
    image:image5,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
  {
    id:6,
    image:image6,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
  {
    id:7,
    image:image7,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
  {
    id:8,
    image:image8,
    title:'Пиджак свежий из Африки',
    desc:'Качество супер сделан из сена',
    price:'64,79'
  },
]
function App() {
  return (
   <div className='app'>
    <Header />
    <main className='main'>
     {products.map(product => (
      <Cart
       key={product.id}
       image={product.image}
       title={product.title}
       desc={product.desc}
       price={product.price}
      />
     ))}
    </main>
    {/* <Btn /> */}
   </div>
  )
 }
 
 export default App