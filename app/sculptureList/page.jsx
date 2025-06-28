// a page to showcase product
"use client"; // ✅ must be the first line

import { sculptureList } from '../utils/data'
import {useState} from 'react'

function Item({ productData }) {
  return (
    <div style={{display: 'inline'}}>
      <img src={productData.url} alt={productData.alt} />
      <p>{productData.name}</p>
      <h5>Description: {productData.description}</h5>

    </div>

  )

}

export default function Product() {
  // useState hold initial value: of all type, use const instead of let
  const [index, setIndex] = useState(0)
  const [showDetails, setShowDetails]= useState(true)
  // const [desc, setDesc] = useState('')

  function handleClickNext(){
    // index= index+=1 --> use the useState function to alter
    index+1>=sculptureList.length? index: setIndex(index+1)
  }

  function handleClickPrev(){
    // index= index+=1 --> use the useState function to alter
    index-1<0? index: setIndex(index-1)
  }

  function handleShowDetails(){
    setShowDetails(!showDetails) // save the if/else
  }

  let singleSculptureData = sculptureList[index];

  // feeding data into child, use useState to alter the data: re-render
  return (
    <>
      <button onClick={handleClickPrev} className='border border-sky-500 fill-yellow-500 px-2 mr-4'>Prev</button>

      <button onClick={handleClickNext} className='border border-sky-500 fill-yellow-500 px-2'>Next</button>
      <h2>
        <i>{singleSculptureData.name} </i> 
        by {singleSculptureData.artist}
      </h2>

      <h3>  
        ({index + 1} / {sculptureList.length})
      </h3>

       <img 
        src={singleSculptureData.url} 
        alt={singleSculptureData.alt}
      />

      <button onClick={handleShowDetails} className='border border-sky-500 fill-current:fill-cyan-500 px-2 mt-2'>        
        {showDetails ? 'Hide' : 'Show'} details
      </button>

      {/* this is how v-if-else looks like, no need return, just the curly bracket will do */}
      {showDetails && <p>{singleSculptureData.description}</p> }



      {/* if no key, then generate one using index */}
      {/* {sculptureList.map((el, index) => (
          <Item key={index} productData={el} />
      ))} */}


    </>

  )



}