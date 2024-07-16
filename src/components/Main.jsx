import React from 'react'

export default function Main(props) {
  const {data} = props
  return (
   <div className='imageContainer'>
      <img className = 'bgImage' src={data.hdurl} alt = {data.copyright}></img>
      </div>
  )
}
