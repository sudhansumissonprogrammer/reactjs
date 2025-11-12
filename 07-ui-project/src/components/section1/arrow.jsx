import React from 'react'
import { ArrowRight } from 'lucide-react';

const arrow = () => {
  return (
    <div>
       <div className=" cursor-pointer hover:translate-x-2 transition-transform duration-300 ease-in-out w-fit">
        <ArrowRight className="w-20 h-20 text-black" />
      </div>
    </div>
  )
}

export default arrow
