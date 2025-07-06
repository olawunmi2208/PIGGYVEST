import React from 'react'
import { MdLock } from "react-icons/md";
import { BsArrowReturnRight } from "react-icons/bs";

const Security = () => {
  return (
    <div>
     <main > {<MdLock />}</main>
     <div className='flex flex-col'>
      <h1>Your security is our priority</h1>
      <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security 
        encryption to ensure that your information is completely protected from fraud.</p>
        <main>
          {<BsArrowReturnRight />}
         <h2>More on our security measures</h2>
        </main>
     </div>

      </div>
    
  )
};

export default Security