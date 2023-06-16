import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [fetchdata , setFetchData] = useState([])


  const getData = async () => {
    let result = await axios.get('https://dummyjson.com/products')
    setFetchData(result.data.products)
  }
console.log(fetchdata.products)


  useEffect(() => {
   getData()    
  } , [])


  return (
    <div>
      <div className='grid'>
        {
          fetchdata.map((res) => {
            const {id , title , images} = res;
            return(
              <div className='card' key={id}>
               <h3 style={{alignItems: "center"}}>{id} </h3>
               <h5>{title} </h5>
               <img src={images[0]}  alt='/' className='image'/>
               </div> 
            )
          })
        }
      </div>
    </div>
  )
}

export default App