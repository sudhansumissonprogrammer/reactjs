import React from 'react'
import Leftcontent1 from './leftcontent1'
import Rightcontent1 from './rightcontent1'

const page1content = () => {
  return (
    <div className='py-10 px-15 flex gap-10 items-center   h-[135vh] bg-white-900 '>

        <Leftcontent1/>
        <Rightcontent1/>
    </div>
  )
}

export default page1content
