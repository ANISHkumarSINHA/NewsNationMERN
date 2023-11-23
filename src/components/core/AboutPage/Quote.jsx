import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-3xl font-semibold mx-auto py-5 pb-20 text-center text-white">
        Empower voices, ignite change. Our innovative platform to  <HighlightText text={"share stories, report news "} />{""}
        and  
           
          <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            shape
            tomorrow's narratives
            through
          diverse 
        </span>
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
            {" "}
            journalism contributions.
        </span> 
    </div>
  )
}

export default Quote