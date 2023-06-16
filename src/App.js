import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [fetchdata , setFetchData] = useState([])


  const getData = async () => {
    let result = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setFetchData(result.data)
  }
console.log(fetchdata)


  useEffect(() => {
   getData()    
  } , [])

  
  return (
    <div>
      <div>
        {
          fetchdata.map((res) => {
            const {id , title , body} = res;
            return(
              <div className='map_element' key={id}>
               <h3>{id} </h3>
               <h5>{title} </h5>
               <h6 className='body'> {body} </h6>
               </div> 
            )
          })
        }
      </div>
    </div>
  )
}

export default App