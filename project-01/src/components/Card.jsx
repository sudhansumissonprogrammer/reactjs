import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
        <img src={props.img} alt="profile pic" width="100%" />
        <h1>{props.user},{props.age}</h1>
         <p>i am a react developer</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card
